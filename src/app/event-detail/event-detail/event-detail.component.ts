import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/firestore/auth.service';
import { EventsService } from 'src/app/services/firestore/events.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { ConversationsService } from 'src/app/services/firestore/Conversations.service';
import Swal from 'sweetalert2';
import { firestore, User } from 'firebase';
import { NavigationExtras } from '@angular/router';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { Observable } from 'rxjs';
import { Settings } from '@angular/fire/firestore';



@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  public campaignId;
  public eventId;

  public eventObject = undefined;
  public campaignObject = undefined;
  public params = undefined;
  public conversaciones = []
  public user$ ;
  public mostrar_chat:boolean = false;
  public mostrar_edit:boolean = false;
  public mensaje:String = " ";
  public chat_bloqueado:boolean = true;
  public conversation={}
      
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private eventsService: EventsService,
    private firestoreService: FirestoreService,
    private conversationsService: ConversationsService,
    private AuthService: AuthService, 
    
  ) { }

  sendMessageToConversation($event){
    const mensaje_chat = $event ;
    console.log(mensaje_chat);
    this.createMessage(mensaje_chat,true);
  }
  redirectEventDetailEdit(){
    let eventId = this.eventId;
    let campaignId = this.campaignId;
    let description=this.eventObject.description
    let name=this.eventObject.name
    let type=this.eventObject.type
console.log(description)
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "eventId": JSON.stringify(eventId),
          "campaignId" : JSON.stringify(campaignId),
          "eventname":JSON.stringify(name),
          "eventdescription":JSON.stringify(description),
          "eventtype":JSON.stringify(type)
      }
    };

    this.router.navigate(["home/detalle-evento-editar"],  navigationExtras);
  }
  approveEvent() {
    let payloadObject = {
      state: {
        "running": true,
        "waiting": false,
        "rejected": false,
        "finished": false
      }
    }
    console.log("this.eventId", this.eventId)
   // if (this.campaignObject.state.running) {
   
      Swal.fire({
        title: '¿Está seguro que desea aprobar el evento?',
        text: 'El evento será aprobado y publicado.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, aprobar',
        cancelButtonText: 'No, cancelar'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Aprobada!',
            'La actualización ha sido aprobada exitosamente.',
            'success'
          )
          this.eventsService.approveEvent(payloadObject, this.eventId);
         this.ChangexistStatusChat(this.eventId)
          this.router.navigate(['home/eventos'])
        } else if (result.dismiss === Swal.DismissReason.cancel) {

        }
      })
   // } else if (this.campaignObject.state.waiting) {
     // Swal.fire("Acción Denegada","Es necesario que la campaña se encuentre activa","error");
    //}
  }
  ChangexistStatusChat(Id:any):void{
    this.conversationsService.getStatusChat(Id).subscribe((estado)=>
    {
      let status= estado.payload.data()["status"] 
      if(status){
      this.statusConversations(false)
      }
    })
  
  }
  denyEvent() {
    let payloadObject = {
      state: {
        "running": false,
        "waiting": false,
        "rejected": true,
        "finished": false
      },
     // denyReason: undefined,
    }
    console.log("this.eventId", this.eventId)
    Swal.mixin({
      confirmButtonText: 'Siguiente &rarr;',
      showCancelButton: true,
      progressSteps: ['1','2'],

    }).queue([
      {
        title: '¿Está seguro que desea rechazar el evento?',
        icon: 'warning',
        text: 'El evento será rechazado y no se publicará.',

      },
      {
        title: 'Rechazar',
        text: 'Escriba el motivo de su rechazo',
        input: 'textarea',
        inputAttributes: {required:""},
        validationMessage:"Debe indicar un motivo",
        confirmButtonText: 'Rechazar',
      }
      ]).
        then( (result:any) => {
          if (result.dismiss === Swal.DismissReason.cancel) {

          } else if (result.value[0]) {

            const motivo:String = result.value[1];
            console.log(motivo);
            this.createMessage(motivo,false);
            this.eventsService.denyEvent(payloadObject, this.eventId);
            this.router.navigate(['home/eventos']);
            // Swal.fire(
            //   'Rechazada!',
            //   'El evento ha sido rechazada exitosamente.',
            //   'success'
            // )
          } 
      });
    } 

  getEventById(eventId) {
    this.eventsService.getEventById(eventId).subscribe((eventSnapshot) => {
      this.eventObject = eventSnapshot.payload.data();
      console.log("this.eventObject", this.eventObject);
    }, (error) => {
      console.log(error)
    });
  }

  getCampaignById(campaignId) {
    this.firestoreService.getOriginalCampaignById(campaignId).subscribe((campaignSnapshot) => {
      this.campaignObject = campaignSnapshot.payload.data();

      // console.log("this.categoriesOriginal", this.categoriesOriginal)
      console.log("this.campaignObject", this.campaignObject);

    }, (error) => {
      console.log(error)
    });
  }

  getRouteParams(): void {
    this.route.queryParams.subscribe(params => {
      this.params = params
    });

    this.eventId = this.params.eventId.replace("\"", "");
    this.eventId = this.eventId.toString().substring(0, this.eventId.length - 1)
    this.campaignId = this.params.campaignId.replace("\"", "");
    this.campaignId = this.campaignId.toString().substring(0, this.campaignId.length - 1)

    console.log("this.eventId", this.eventId, "this.campaignId", this.campaignId);
  }



  createMessage(mensaje:String, actualizar:boolean ):void {
    // const emisor = this.user$.uid
    // const emisor = this.user$.email
    // const receptor = this.campaignObject.promoter.id

    let payloadObject = {
      //sender_user: emisor,
      sender_user: "admin",
      message:mensaje,
      timestamp: firestore.FieldValue.serverTimestamp(),
      //receiver_user: receptor,
      receiver_user: "user",
      check:false
    }
    console.log(payloadObject);
    console.log(this.eventId);
    if(!actualizar){
       this.conversationsService.createConversation(payloadObject,this.eventId)
       this.statusConversations(true)
    }else
      this.conversationsService.updateConversation(payloadObject,this.eventId)

    // this.eventsService.updateConversation(payloadObject,this.eventId);
  }
 statusConversations(status:boolean){
  let payloadObjectConversation = {status: status }
  this.chat_bloqueado= status;
  this.conversationsService.statusChat(payloadObjectConversation,this.eventId)
 }
datosconversations(){
  this.conversation={
    Id:this.eventId,
    type:"event"
  }
}
  async ngOnInit(): Promise<void> {
    this.getRouteParams();
    this.getEventById(this.eventId);
    this.getCampaignById(this.campaignId);
    this.user$ =  (await this.AuthService.getCurrentUser()) ;
    // console.log(this.user$);
    this.datosconversations()

  }

}
