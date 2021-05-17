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

/**
 * @title Card with multiple sections
 */



interface Ciudad {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css'],
})
export class Noticias {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  public events = [];
  public categories = [];
  public dates = [];

  public tipoEvento = ["Todas", "Convocatorias", "Noticias"];
  public ciudades = ["Todas"];
  public esConvocatoria = false;
  public condicioneventovacio = false;


  constructor(
    private firestore: AngularFirestore,
    private firestoreService: FireBaseService,
    public router: Router,

  ) {

  }

  ngOnInit(): void {
    this.getCiudades();
    this.getEvents("Todas", "Activas","");
  }

  redirectEventDetail(value) {
    let eventId = value.eventId;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "evenU":false,
      }
    };
    this.router.navigate(["detalleEvento",eventId], navigationExtras);
  }


  getEvents(ciudad,estado,fechaSeleccionada): void {
    console.log(ciudad,",estado: ",estado,",fecha:",fechaSeleccionada);
    this.firestoreService.getEvents(ciudad,"Noticias",estado).subscribe((eventsSnapshot) => {
      this.events = [];
      eventsSnapshot.forEach((event: any) => {
        var fechaEvento=event.payload.doc.data().dateEvent.split(",")[0];
        if(fechaSeleccionada!=""&& fechaSeleccionada <= fechaEvento){ 
          let appObj = { ...event.payload.doc.data(),eventId: event.payload.doc.id}
          this.events.push(appObj);
          
        }else if(fechaSeleccionada==""){//se carga por primera vez
          let appObj = { ...event.payload.doc.data(),eventId: event.payload.doc.id}
          this.events.push(appObj);
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
    }, (error) => {
      console.log("Error al cargar los eventos", error)
    });
    

  }

  sortFunction(a, b) {
    var dateA = new Date(a.dateEvent).getTime();
    var dateB = new Date(b.dateEvent).getTime();
    return dateA < dateB ? 1 : -1;
  };


  

  getCiudades() {



    console.log('Aqui--')
    this.firestoreService.getCiudades("todas").subscribe((ciudadesSnapshot) => {
      //  this.ciudades = [];
      ciudadesSnapshot.forEach((ciudades: any) => {
        var elemento = ciudades.payload.doc.data().city
        if (this.ciudades.includes(elemento)) {

        } else {
          const add = this.ciudades.push(elemento)
        }

      });


    })


  }




}