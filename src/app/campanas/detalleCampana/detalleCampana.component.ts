import { Component, OnInit } from '@angular/core';
import { FireBaseService, ICampaña } from '../../services/fire-base.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ConversationsService } from 'src/app/services/conversations.service';
import { firestore } from 'firebase';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { DialogEvent } from './dialogevent.component';
import { LoadingContentExampleDialog } from 'src/app/loading/loading.component';
import { MapsAPILoader } from '@agm/core';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { ShareMediaContentExampleDialog } from 'src/app/shareMedia/shareMedia.component';


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

  public campaignId;
  public followedCampaign = false;


  public originalCampaignInfo = undefined;
  public originalCampaign = undefined;

  public categoriesUpdate = [];
  public categoriesOriginal = [];

  public conversation = {}
  public mostrar_chat: boolean = false;


  public campanaUsuario: boolean = false;
  public misCampanas: boolean;

  condicionNoEventos:boolean = true;
  public events = [];

  latitude: number;
  longitude: number;
  zoom: number;

  i = 0;

  public ruta = this.router.url;
  params: any;

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
        city : this.originalCampaign.city,
        type:"Convocatoria",
        dateStart:this.originalCampaign.dateStart,
        dateEnd:this.originalCampaign.dateEnd,
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
      this.params=params;
      this.campanaUsuario = (params.campU == 'true');
    });
  }

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.campaignId=params['id'];
    });
    this.dialog.open(LoadingContentExampleDialog);
    this.getRouteParams();
    this.datosconversations();
    
    this.getOriginalCampaignById(this.campaignId);
    
    this.getEventsById(this.campaignId);
    
  }

  async getLoggedUser(){
      this.user = await this.AuthService.getCurrentUser();
      this.firestoreService.getDatosUser(this.user.uid).subscribe((userSnapshot) => {
      this.usuario = userSnapshot.payload.data();
      this.firestoreService.checkFollow(this.user.uid,this.campaignId).subscribe((snp) => {
        if(snp.length>0){
          //this.followCampaignID= snp[0].payload.doc.id;
          this.followedCampaign=true;
        }
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
  
        if(obj.payload.doc.data().type=="Convocatoria"){
          let appObj = { ...obj.payload.doc.data(),eventID: obj.payload.doc.id}
                  
          if(!this.events.some((item) => item.eventID == appObj.eventID)){
              this.events.push(appObj);
          }
        }
      });
       if(this.events.length>0){
        this.setMap(this.events[0].lat,this.events[0].long);
       }
      
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
    }, (error) => {
      console.log(error)
    });
  }

  sendMessageToConversation($event) {
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
    if(this.usuario!=null){
      if(this.usuario.cedula!=""){
        Swal.fire({
            title: '¿Desea firmar la campaña?',
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
              //eliminar updateFollowers en caso se cree el trigger en la base.
              console.log(this.firestoreService.updateFollowers(this.originalCampaign.numFollowers+1,this.originalCampaign.campaignId));
                
              Swal.fire({
                title:'Firmada!',
                text:'La campaña ha sido firmada!',
                icon:'success',
                showCloseButton: true,
                confirmButtonText:
                  '<i class="fa fa-thumbs-up"></i> Compartir!',
                confirmButtonAriaLabel: 'Share',
              }).then((result) => {
                if (result.isConfirmed) {
                  this.dialog.open(ShareMediaContentExampleDialog);
                }
              })
              this.getLoggedUser();
              
            }
          })
      }
      if(this.usuario.cedula==""){
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
            let number = this.validateNumber(result.value);
            if(number){
              let datos={
                nombre:this.usuario.displayName, cedula:result.value,telefono:this.usuario.phoneNumber
              }
              this.firestoreService.updateDatosUser(this.user.uid, datos);
              let timerInterval
              Swal.fire({
                title: 'Procesando!',
                html: 'Se recargará la página',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                  const content = Swal.getContent()
                  if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                          //b.textContent = Swal.getTimerLeft()
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
                }
              })
            }
            else if(!number){
              Swal.fire({
                title: 'Formato incorrecto de cédula.',
                icon: 'error',
                html:'Usted ingreso <b>'+result.value+'</b>',
                footer: "Tienen que ser 10 números.",
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
                }
              })
            }
          }
        })
      }
    }
    if(this.usuario==null){
      Swal.fire({
        title: 'Usted necesita tener una cuenta para firmar la campaña.',
        text: this.originalCampaign.name,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(["/login"]);
        }
      })
    }
    
  }

  validateNumber(input){
    const s = String(input)
    return !isNaN(+s) && isFinite(+s) && (typeof input === 'number' || !/e/i.test(s)) && input.length==10;
  }
 
  redirectEventDetail(value) {
    let eventId = value.eventId;

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "evenU":this.params.campU
      }
    };
    this.router.navigate(["detalleEvento",eventId], navigationExtras);
  }

}