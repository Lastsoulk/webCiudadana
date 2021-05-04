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
        let appObj = { ...event.payload.doc.data(),eventId: event.payload.doc.id}
        this.events.push(appObj);
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
    //this.esConvocatoria = AppComponent.estoyLogeado;

    if(localStorage.getItem('currentUser')!=null){
      this.esConvocatoria = true;
    }

    else{
      this.esConvocatoria = false;
    }
  }

  getCiudades() {
    this.firestoreService.getCiudades("todas").subscribe((ciudadesSnapshot) => {
      //  this.ciudades = [];
      ciudadesSnapshot.forEach((ciudades: any) => {
        var elemento = ciudades.payload.doc.data().city
        if (this.ciudades.includes(elemento)) {

        } else {
          const add = this.ciudades.push(elemento)
        }
        this.selectedCity = this.ciudades[0];
      });
      console.log(this.ciudades);
    })
  }


}