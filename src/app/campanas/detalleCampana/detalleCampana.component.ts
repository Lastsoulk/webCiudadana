import { Component, OnInit } from '@angular/core';
import { FireBaseService, ICampaña } from '../../services/fire-base.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConversationsService } from 'src/app/services/conversations.service';
import { firestore } from 'firebase';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { DialogEvent } from './dialogevent.component';
import { LoadingContentExampleDialog } from 'src/app/loading/loading.component';
import { MapsAPILoader } from '@agm/core';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';


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
  public followedCampaign = false;
  private followCampaignID;

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

  condicionNoEventos:boolean = true;
  public events = [];

  latitude: number;
  longitude: number;
  zoom: number;

  i = 0;

  constructor(
    private firestoreService: FireBaseService,
    public router: Router,
    public route: ActivatedRoute,
    private AuthService: AuthService,
    private conversationsService: ConversationsService,
    private mapsAPILoader: MapsAPILoader,
    public dialog: MatDialog,
    private datePipe: DatePipe,
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
        city : this.originalCampaign.city
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
    this.dialog.open(LoadingContentExampleDialog);
    this.getRouteParams();
    this.datosconversations();
    
    this.getOriginalCampaignById(JSON.parse(this.params.camp));
    
    this.getEventsById(JSON.parse(this.params.camp));
    
  }

  async getLoggedUser(){
      this.user = await this.AuthService.getCurrentUser();
      this.firestoreService.getDatosUser(this.user.uid).subscribe((userSnapshot) => {
      this.usuario = userSnapshot.payload.data();
      this.firestoreService.checkFollow(this.user.uid,this.campaignId).subscribe((snp) => {
        this.followCampaignID= snp[0].payload.doc.id;
        this.followedCampaign=true;
      });

    }, (error) => {
      console.log(error)
    });
  }


  getEventsById(campaignId){
    this.firestoreService.getEventsByCampaign(campaignId).subscribe((snp) => {
      this.events = [];
      if (snp.length == 0) {
        this.condicionNoEventos = true;
      } else {
          this.condicionNoEventos = false;
      }
      snp.forEach(async (obj: any) => {
        console.log(obj.payload.doc.data());
        this.events.push(obj.payload.doc.data());
        
      });
       
      this.setMap(this.events[0].lat,this.events[0].long);
    }, (error) => {
      console.log(error)
    });
  }

  selectValue(event){
    this.i = event;
    this.setMap(this.events[this.i].lat,this.events[this.i].long);
  }


  setMap(lat, long){
    this.latitude=lat;
    this.longitude=long;
    this.zoom = 16;
    console.log(this.latitude);
    console.log(this.longitude);
    this.mapsAPILoader.load();
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

      this.getLoggedUser();

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

/*
  async campanaspersonales() {
    this.user = await this.AuthService.getCurrentUser();
    this.getDatosUser(this.user.uid);
  }
*/
  async firmarCampana(){
      if(this.usuario.cedula!=""){
          Swal.fire({
            title: 'Desea firmar la campaña?',
            text: this.originalCampaign.name,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Firmar!'
          }).then((result) => {
            if (result.isConfirmed) {
              let addfollow = {
                date : this.datePipe.transform(new Date(), 'dd/MM/yyyy, HH:mm'),
                idCampaign : this.originalCampaign.campaignId,
                idUser : this.user.uid,
              }
              console.log(this.firestoreService.addFollow(addfollow));
              this.followedCampaign=true;
              console.log(this.firestoreService.updateFollowers(this.originalCampaign.numFollowers+1,this.originalCampaign.campaignId));
              
              Swal.fire(
                'Firmada!',
                'La campaña ha sido firmada!',
                'success'
              )
              this.getLoggedUser();
            }
          })

      }
      if(this.usuario.cedula==""){
        console.log("no puede firmar");
        Swal.fire({
          icon: 'warning',
          title: 'No tiene registrado su cédula.',
          text: 'Digité su cédula',
          input: 'text',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: true,
          confirmButtonText: 'Registrar',
          showLoaderOnConfirm: true,
          allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
          if (result.isConfirmed) {
            console.log(result.value);
            let datos={
              nombre:this.usuario.displayName, cedula:result.value,telefono:this.usuario.phoneNumber
            }
            this.firestoreService.updateDatosUser(this.user.uid, datos);


            let timerInterval
            Swal.fire({
              title: 'Procesando!',
              html: 'Se recargara la página',
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                  const content = Swal.getContent()
                  if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                      b.textContent = Swal.getTimerLeft().toString();
                    }
                  }
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')

              }
            })
          }
        })

      }
      
    
  }

  async quitarFirma(){
        Swal.fire({
          title: 'Desea quitar la firma de la campaña?',
          text: this.originalCampaign.name,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Quitar firma!'
        }).then((result) => {
          if (result.isConfirmed) {

            console.log(this.firestoreService.quitarFollow(this.followCampaignID));
            this.followedCampaign=false;
            console.log(this.firestoreService.updateFollowers(this.originalCampaign.numFollowers-1,this.originalCampaign.campaignId));
            
            Swal.fire(
              'Confirmado!',
              'Se ha eliminado la firma de la campaña!',
              'success'
            )
          }
        })
}



}