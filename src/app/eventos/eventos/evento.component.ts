import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FireBaseService, ICampaña } from '../../services/fire-base.service';
import { NavigationExtras, Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";
import { MatTableDataSource } from '@angular/material/table';
import firebase from 'firebase';
import { AppComponent } from 'src/app/app.component';

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
  public dates = [];

  public tipoEvento = ["Todas", "Convocatorias", "Noticias"];
  public ciudades = ["Todas"];
  public esConvocatoria = false;
  public condicioneventovacio = false;

  public selectedCity;

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


  getEvents(ciudad, tipo): void {
    if (tipo == 'Convocatorias') {
      this.esConvocatoria = true;
    }
    if (tipo == 'Noticias') {
      this.esConvocatoria = false;
    }
    this.firestoreService.getEvents(ciudad, tipo).subscribe((eventsSnapshot) => {
      this.events = [];
      this.categories = [];
      let i = 0
      //console.log('veamos: ', eventsSnapshot.length)
      eventsSnapshot.forEach((event: any) => {
        //console.log('test', event.payload.doc.data())
        if (new Date(event.payload.doc.data().dateEvent).getTime() != new Date().getTime() && event.payload.doc.data().type === "convocatoria") {
          console.log('La fecha del evento es menor al now', new Date(event.payload.doc.data().dateEvent).getTime() > new Date().getTime())
          this.events.push({
            name: event.payload.doc.data().name,
            address: event.payload.doc.data().address,
            description: event.payload.doc.data().description,
            eventId: event.payload.doc.id,
            eventPic: event.payload.doc.data().eventPic,
            state: event.payload.doc.data().state,
            dateEvent: event.payload.doc.data().dateEvent,
            city: event.payload.doc.data().city,
            type: event.payload.doc.data().type
          });

          //console.log('campanaid', event.payload.doc.data().campaignId)
          var refproduct = firebase.firestore();
          refproduct.collection('campaigns').doc(event.payload.doc.data().campaignId).get().then(snapshot => {
            //console.log('campana', snapshot.data().name)
            this.events[i]['nombrecampana'] = snapshot.data().name
            i++
          })
          console.log(this.events);
        } else if (event.payload.doc.data().type == 'noticia') {
          this.events.push({
            name: event.payload.doc.data().name,
            address: event.payload.doc.data().address,
            description: event.payload.doc.data().description,
            eventId: event.payload.doc.id,
            eventPic: event.payload.doc.data().eventPic,
            state: event.payload.doc.data().state,
            dateEvent: event.payload.doc.data().dateEvent,
            city: event.payload.doc.data().city,
            type: event.payload.doc.data().type,
            dateCreate: event.payload.doc.data().dateCreate
          });

          //console.log('campanaid', event.payload.doc.data().campaignId)
          var refproduct = firebase.firestore();
          refproduct.collection('campaigns').doc(event.payload.doc.data().campaignId).get().then(snapshot => {
            //console.log('campana', snapshot.data().name)
            this.events[i]['nombrecampana'] = snapshot.data().name
            i++
          })

        }
      });
      console.log("this.events", this.events);
      this.events.sort(this.sortFunction);
      console.log('ordenado', this.events)

      if (this.events.length == 0) {
        this.condicioneventovacio = true;
      } else {
        this.condicioneventovacio = false;
      }
      // this.dataSource.data = this.campaigns as Campaign[];
    }, (error) => {
      console.log("Error al cargar los eventos", error)
    });
    

  }

  sortFunction(a, b) {
    var dateA = new Date(a.dateEvent).getTime();
    var dateB = new Date(b.dateEvent).getTime();
    return dateA < dateB ? 1 : -1;
  };


  ngOnInit(): void {



    this.getCiudades();
    this.getEvents("Todas", "Convocatorias");
    this.esConvocatoria = AppComponent.estoyLogeado;
  }

  getCiudades() {



    console.log('Aqui--')
    this.firestoreService.getCiudades().subscribe((ciudadesSnapshot) => {
      //  this.ciudades = [];
      ciudadesSnapshot.forEach((ciudades: any) => {
        var elemento = ciudades.payload.doc.data().city
        if (this.ciudades.includes(elemento)) {

        } else {
          const add = this.ciudades.push(elemento)
        }
        this.selectedCity = this.ciudades[0];
      });


    })


  }




}