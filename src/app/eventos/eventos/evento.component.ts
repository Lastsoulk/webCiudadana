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


  redirectEventDetail(value) {
    let eventId = value.eventId;



    let navigationExtras: NavigationExtras = {
      queryParams: {
        "eventId": JSON.stringify(eventId),

        // "estadoNegado": bandera,

      }
    };
    this.router.navigate(["detalleEvento"], navigationExtras);
  }


  getEvents(): void {
    this.firestoreService.getEvents().subscribe((eventsSnapshot) => {
      this.events = [];
      this.categories = [];
      eventsSnapshot.forEach((event: any) => {
        this.events.push({
          name: event.payload.doc.data().name,
          address: event.payload.doc.data().address,
          description: event.payload.doc.data().description,
          eventId: event.payload.doc.id,
          eventPic: event.payload.doc.data().eventPic,
          state: event.payload.doc.data().state,
          dateEvent: event.payload.doc.data().dateEvent,

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


  }






}