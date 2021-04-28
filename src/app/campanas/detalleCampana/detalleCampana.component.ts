import { Component, OnInit } from '@angular/core';
import { FireBaseService, ICampaña } from '../../services/fire-base.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConversationsService } from 'src/app/services/conversations.service';
import { firestore } from 'firebase';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { DialogEvent } from './dialogevent.component';
import { LoadingContentExampleDialog } from 'src/app/loading/loading.component';


// import {firestore} from "@angular/fire/firestore"
// import { firestore } from 'firebase';
// import * as fir from 'firebase/firestore';
//import { AngularFirestore } from '@angular/fire/firestore';
// import * as firebase from 'firebase';
// import firestore from "../../../../node_modules/firebase";
// import firestore from "../../../../node_modules/firebase";

/**
 * @title Card with multiple sections
 */

@Component({
  selector: 'detalle-campana',
  templateUrl: './detalleCampana.component.html',
  styleUrls: ['./detalleCampana.component.css'],
})
export class DetalleCampana {
  nombreconvocatoria: string;
  descripcion: string;
  fechaconvocatoria: string;
  fotoconvocatoria: string;
  direccion: string;

  usuario: any;
  user: any;

  public campaignUpdateId;
  public campaignId;

  public originalCampaignInfo = undefined;
  public originalCampaign = undefined;
  public lastCampaignUpdate = undefined;

  public categoriesUpdate = [];
  public categoriesOriginal = [];
  public zone;
  public params;

  public conversation = {}
  public mostrar_chat: boolean = false;


  public miCampanaNegada: boolean = false;
  public campanaUsuario: boolean = false;
  public misCampanas: boolean;

  constructor(
    private firestoreService: FireBaseService,
    public router: Router,
    public route: ActivatedRoute,
    private AuthService: AuthService,
    private conversationsService: ConversationsService,
    public dialog: MatDialog
    //private firestore: AngularFirestore
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEvent, {
      width: '800px',
      //height: '90%',
      data: { nombreconvocatoria: this.nombreconvocatoria, 
        descripcion: this.descripcion, 
        fechaconvocatoria: this.fechaconvocatoria, 
        fotoconvocatoria: this.fotoconvocatoria, 
        direccion: this.direccion,
        campaignId : this.originalCampaign.campaignId,
        city : this.originalCampaign.ciudad.name
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.nombreconvocatoria = result;
      console.log(result)   //Result es el input
    });
  }

  getRouteParams(): void {
    this.route.queryParams.subscribe(params => {
      this.params = params;


      this.campaignId = this.params.camp.replace("\"", "");
      this.campaignId = this.campaignId.toString().substring(0, this.campaignId.length - 1);

      this.miCampanaNegada = (this.params.estadoCampana == 'true');
      this.campanaUsuario = (this.params.campanaUsuario == 'true');
    });
    //console.log("this.campaignId", this.campaignId);
  }

  async ngOnInit() {
    this.getRouteParams();
    this.datosconversations();
    
    this.getOriginalCampaignById(JSON.parse(this.params.camp));
    
    this.getEventsById(JSON.parse(this.params.camp));
    this.dialog.open(LoadingContentExampleDialog);
  }

  getEventsById(campaignId){
    this.firestoreService.getEventsByCampaign(campaignId).subscribe((snp) => {
      snp.forEach(async (obj: any) => {
        console.log(obj.payload.doc.data());
      });
    }, (error) => {
      console.log(error)
    });
  }

  getOriginalCampaignById(campaignId) {
    this.firestoreService.getOriginalCampaignById(campaignId).subscribe((campaignSnapshot) => {

      this.originalCampaignInfo = campaignSnapshot.payload.data();
      
      this.firestoreService.getDatosUser(this.originalCampaignInfo.promoter).subscribe((userSnapshot) => {
        let temp=userSnapshot.payload.data();
        this.firestoreService.getAutoridad(this.originalCampaignInfo.authority).subscribe((userAutoriSnapshot) => {
          let tempo=userAutoriSnapshot.payload.data();
          this.firestoreService.getCiudadById(this.originalCampaignInfo.city).subscribe((citysnp) => {
            let ciudad = citysnp.payload.data();
            let appObj = { ...this.originalCampaignInfo,['promotore']: temp, ['autority']: tempo ,['ciudad']: ciudad ,campaignId: campaignSnapshot.payload.id}
            this.originalCampaign=appObj;
            this.dialog.closeAll();
          });
          
        });

      });

      //console.log("this.originalCampaign", this.originalCampaign);

    }, (error) => {
      console.log(error)
    });
  }

  sendMessageToConversation($event) {
    console.log('aqi');
    const mensaje_chat = $event;
    console.log(mensaje_chat);
    this.createMessage(mensaje_chat, true);
  }

  ChangexistStatusChat(Id: any): void {
    this.conversationsService.getStatusChat(Id).subscribe((estado) => {
      let status = estado.payload.data()["status"]
      if (status) {
        this.statusConversations(false)
      }
    })
  }

  statusConversations(status: boolean) {
    let payloadObjectConversation = { status: status }
    this.conversationsService.statusChat(payloadObjectConversation, this.campaignId)
  }
  createMessage(mensaje: String, actualizar: boolean): void {
    //const emisor = this.user$.uid
    //const receptor = this.originalCampaign.promoter.id

    let payloadObject = {
      sender_user: "user",
      message: mensaje,
      timestamp: firestore.FieldValue.serverTimestamp(),
      receiver_user: "admin",
      check: false
    }
    console.log(payloadObject);
    console.log(this.campaignId);

    // if(!actualizar){
    //   this.conversationsService.createConversation(payloadObject, this.campaignId)
    //   this.statusConversations(true)
    // }else
    this.conversationsService.updateConversation(payloadObject, this.campaignId);

  }

  datosconversations() {
    this.conversation = {
      Id: this.campaignId,
      type: "campaign"
    }
  }


  async campanaspersonales() {
    this.user = await this.AuthService.getCurrentUser();
    this.getDatosUser(this.user.uid);
  }

  getDatosUser(userId) {
    this.firestoreService.getDatosUser(userId).subscribe((userSnapshot) => {
      this.usuario = userSnapshot.payload.data();
      //console.log("datos usuario: ", this.usuario);

    }, (error) => {
      console.log(error)
    });

  }



}