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

  public tipoEvento = ["Todas","Convocatorias","Noticias"];
  public ciudades = ["Todas"];
  public esConvocatoria = false;
  public condicioneventovacio = false;


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


  getEvents(ciudad,tipo): void {
    if(tipo=='Convocatorias'){
      this.esConvocatoria = true;
    }
    if(tipo=='Noticias'){
      this.esConvocatoria = false;
    }
    this.firestoreService.getEvents(ciudad,tipo).subscribe((eventsSnapshot) => {
      this.events = [];
      this.categories = [];
      console.log('veamos: ',eventsSnapshot.length)
      eventsSnapshot.forEach((event: any) => {
        this.events.push({
          name: event.payload.doc.data().name,
          address: event.payload.doc.data().address,
          description: event.payload.doc.data().description,
          eventId: event.payload.doc.id,
          eventPic: event.payload.doc.data().eventPic,
          state: event.payload.doc.data().state,
          dateEvent: event.payload.doc.data().dateEvent,
          city: event.payload.doc.data().city,

        });
      });
      console.log("this.events", this.events.length);
      
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


  ngOnInit(): void {


    
    this.getCiudades();
    this.getEvents("Todas","Todas");


  }

  getCiudades(){

        

    console.log('Aqui--')
        this.firestoreService.getCiudades().subscribe((ciudadesSnapshot) => {
        //  this.ciudades = [];
          ciudadesSnapshot.forEach((ciudades: any) => {
            var elemento = ciudades.payload.doc.data().city
            if(this.ciudades.includes(elemento)){
                
            }else{
                const add = this.ciudades.push(elemento)
            }
           
      });

    
    })
    

  }






}