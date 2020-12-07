import { Component, OnInit } from '@angular/core';
import { FireBaseService, ICampaña } from '../../services/fire-base.service';
import { Router, ActivatedRoute } from '@angular/router';
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




    public detalleEvento = undefined;
    public evento = undefined;
    public eventoId = undefined;
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
       console.log('aca');
        this.route.queryParams.subscribe(params => {
        this.params = params
    });    
        
        this.eventoId = this.params.eventId.replace("\"","");   
        console.log('datos de: ',this.eventoId);
        this.eventoId = this.eventoId.toString().substring(0,this.eventoId.length-1);
        this.detalleEvento = this.params.eventoId;
        //console.log("detalle campana hola: ",this.detalleEvento);


    console.log("this.campaignId ", this.eventoId);
  }

   ngOnInit(): void {
       console.log('aqui');
        this.getRouteParams();
        this.getEventById("eFU5ej2dMPyK3hy56lX3");
        //this.miCampanaNegada = this.misCampanas;
  }

  getEventById(eventoId) {
    this.firestoreService.getEventById(eventoId).subscribe((eventSnapshot) => {
    this.evento = eventSnapshot.payload.data();
    console.log('detalle evento: ',this.evento)


    }, (error) => {
      console.log(error)
    });
  }





  






}