import { Component, OnInit } from '@angular/core';
import { FireBaseService, ICampaña } from '../../services/fire-base.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ConversationsService } from 'src/app/services/conversations.service';



/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'detalle-evento',
    templateUrl: './detalleEvento.component.html',
    styleUrls: ['./detalleEvento.component.css'],
})
export class DetalleEvento {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

    
    misEventos: any[] = [];

    //public detalleEvento = undefined;
    public evento = undefined;;
    public eventoId = undefined;

    public promotor = undefined;
    public ciudad = undefined;
    public campania= undefined;
    // public lastCampaignUpdate = undefined;
    
    // public categoriesUpdate = [];
    // public categoriesOriginal = [];
    // public zone;
    public params;



    constructor(
      private firestoreService: FireBaseService,
      public router: Router, 
      public route: ActivatedRoute,
  ) { }

   getRouteParams(): void {
        this.route.queryParams.subscribe(params => {
        this.params = params
    });    
        
        this.eventoId = this.params.eventId.replace("\"",""); 
        console.log('datos de: ',this.eventoId);
        this.eventoId = this.eventoId.toString().substring(0,this.eventoId.length-1);
       // this.detalleEvento = this.params.eventoId;
        //console.log("detalle campana hola: ",this.detalleEvento);


    console.log("this.campaignId ", this.eventoId);
  }

   ngOnInit(): void {
        this.getRouteParams();
        this.getEventById(this.eventoId);
        //this.miCampanaNegada = this.misCampanas;
        
  }

  getEventById(eventoId) {
    
    this.firestoreService.getEventById(eventoId).subscribe((eventSnapshot) => {
        this.evento = eventSnapshot.payload.data();
        this.firestoreService.getDatosUser(this.evento.idUser).subscribe((userSnapshot) => {
          this.promotor = userSnapshot.payload.data();
         
          this.firestoreService.getCiudadById(this.evento.city).subscribe((citySnapshot) => {
            this.ciudad=citySnapshot.payload.data();
            
            this.firestoreService.getCampañasById(this.evento.idCampaign).subscribe((campSnapshot) => {
              this.campania=campSnapshot.payload.data();
              this.misEventos.push({
                name:this.evento.name,
                eventPic:this.evento.eventPic,
                description:this.evento.description,
                dateEvent:this.evento.dateEvent.split(',')[0],
                hourEvent:this.evento.dateEvent.split(',')[1],
                address:this.evento.address,
                city:this.ciudad.name,
                email:this.promotor.email,
                idCampaign:this.evento.idCampaign,
                campaign:this.campania.name
                
              });
            
            });
          });
        });
      console.log(this.misEventos);

    }), (error) => {
      console.log("Error al cargar el evento", error)
    }

    
  }


  redirectCampaignDetail(value) {
    let campaignId = value.campaignId;
    console.log(campaignId);
    //  console.log("aqui abajo",bandera)


    let navigationExtras: NavigationExtras = {
      queryParams: {
        "camp": JSON.stringify(campaignId),
        "misCampanas": false,
        "estadoCampana":false,
        "campanaUsuario":false,
        // "estadoNegado": bandera,

      }
    };
    this.router.navigate(["detalleCampana"], navigationExtras);

  }

}