import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FireBaseService, ICampaña } from '../../services/fire-base.service';
import { NavigationExtras, Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";
import { MatTableDataSource } from '@angular/material/table';

/**
 * @title Card with multiple sections
 */



interface Ciudad {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'events',
    templateUrl: './evento.component.html',
    styleUrls: ['./evento.component.css'],
})
export class Eventos {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

    public events = [];
    public categories = [];

    constructor(
        private firestore: AngularFirestore,
        private firestoreService: FireBaseService,
        public router: Router,
    ) {

    }


    redirectEventDetail(value){
    let eventId = value.eventId;



    let navigationExtras: NavigationExtras = {
    queryParams: {
      "eventId": JSON.stringify(eventId),

      // "estadoNegado": bandera,
      
                }
    };
    this.router.navigate(["detalleEvento"],  navigationExtras);
    }

 
    getEvents(): void {
        this.firestoreService.getEvents().subscribe((campaignsSnapshot) => {
        this.events = [];
        this.categories = [];
        campaignsSnapshot.forEach((event: any) => {
        this.events.push({
        //  address: event.payload.doc.data(),
          name: event.payload.doc.data().name,
          address: event.payload.doc.data().address,
          description : event.payload.doc.data().description,
          campaignId: event.payload.doc.data().campaignId,
          eventPic: event.payload.doc.data().eventPic,
          state: event.payload.doc.data().state,
          dateEvent: event.payload.doc.data().dateEvent,
        //   campaignUpdateId: campaign.payload.doc.id,
        //   name: campaign.payload.doc.data().name,
        //   description: campaign.payload.doc.data().description,
        //   promoter: campaign.payload.doc.data().promoter,
        //   categories: campaign.payload.doc.data().categories,
        //   dateStart: campaign.payload.doc.data().dateStart,
        //   numFollowers: campaign.payload.doc.data().numFollowers,
        //   state: campaign.payload.doc.data().state,
          //state: this.stateToStringGlobal(campaign.payload.doc.data().state),

        });
      });
      console.log("this.events", this.events);
     // this.dataSource.data = this.campaigns as Campaign[];
    }, (error) => {
      console.log("Error al cargar los eventos", error)
    });
  }


    ngOnInit(): void {
 

        this.getEvents();


    // this.dataSource.filterPredicate = (data: Campana, filter: string): boolean => {
    //   const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
    //     console.log((data as { [key: string]: any })[key]);
    //     return (currentTerm + (data as { [key: string]: any })[key]);
    //   }, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    //   const transformedFilter = filter.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    //   return dataStr.indexOf(transformedFilter) != -1;
  //  }
  }

    



  
}