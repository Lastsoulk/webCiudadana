import { Component, OnInit } from '@angular/core';
import { FireBaseService, ICampaña } from '../../services/fire-base.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConversationsService } from 'src/app/services/conversations.service';
import { firestore } from 'firebase';
import { MatDialog } from '@angular/material/dialog';
import { DialogEvent } from './dialogevent.component';

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


  public campaignUpdateId;
  public campaignId;

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
    private conversationsService: ConversationsService,
    public dialog: MatDialog
    //private firestore: AngularFirestore
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEvent, {
      width: '800px',
      //height: '90%',
      data: { nombreconvocatoria: this.nombreconvocatoria, descripcion: this.descripcion, fechaconvocatoria: this.fechaconvocatoria, fotoconvocatoria: this.fotoconvocatoria, direccion: this.direccion }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.nombreconvocatoria = result;
      //console.log(result)   //Result es el input
    });
  }

  getRouteParams(): void {
    console.log('aca');
    this.route.queryParams.subscribe(params => {
      this.params = params;


      this.campaignId = this.params.camp.replace("\"", "");
      this.campaignId = this.campaignId.toString().substring(0, this.campaignId.length - 1);

      this.miCampanaNegada = (this.params.estadoCampana == 'true');
      this.campanaUsuario = (this.params.campanaUsuario == 'true');
      console.log('hola')
      console.log(this.params.campanaUsuario)


    });


    // this.misCampanas = this.params.misCampanas;
    //console.log("detalle campana hola: ",this.miCampanaNegada);
    // this.campaignUpdateId = this.params.upd;
    //  this.campaignUpdateId = this.params.upd.replace("\"","");   
    //  this.campaignUpdateId = this.campaignUpdateId.toString().substring(0,this.campaignUpdateId.length-1)

    console.log("this.campaignId", this.campaignId);
    console.log("estamos con el valor de aca: ", this.miCampanaNegada);
  }

  async ngOnInit() {
    console.log('aqui');
    this.getRouteParams();
    this.datosconversations();
    // this.getLastCampaignUpdateById(JSON.parse(this.params.upd));
    this.getOriginalCampaignById(JSON.parse(this.params.camp));
    //this.miCampanaNegada = this.misCampanas;
  }

  getOriginalCampaignById(campaignId) {
    this.firestoreService.getOriginalCampaignById(campaignId).subscribe((campaignSnapshot) => {
      this.originalCampaign = campaignSnapshot.payload.data();

      console.log("this.originalCampaign", this.originalCampaign);

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

  //   getLastCampaignUpdateById(campaignUpdateId) {
  //     this.firestoreService.getLastCampaignUpdateById(campaignUpdateId).subscribe((campaignUpdateSnapshot) => {
  //     this.lastCampaignUpdate = campaignUpdateSnapshot.payload.data();
  //     this.categoriesUpdate = campaignUpdateSnapshot.payload.data()['categories']

  //     console.log("this.lastCampaignUpdate", this.lastCampaignUpdate)
  //     console.log("this.categoriesUpdate", this.categoriesUpdate)

  //     }, (error) => {
  //       console.log(error);
  //     });
  //   }




}