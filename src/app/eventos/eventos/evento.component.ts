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
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS } from '@angular/material/core';

/**
 * @title Card with multiple sections
 */

 interface Ciudad {
  id: string;
  idProvince:string;
  name: string;
}


export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'events',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class Eventos {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  public events = [];
  public categories = [];
  public dates = [];

  public tipoEvento = ["Todas", "Convocatorias", "Noticias"];
  //public ciudades = ["Todas"];
  public condicioneventovacio = false;

  //date control
  selectedDate="";
  

  //city control
  public ciudades = [];
  public selectedCity;
  public cityCtrl: FormControl = new FormControl();
  public cityFilterCtrl: FormControl = new FormControl();
  public filteredCities: ReplaySubject<Ciudad[]> = new ReplaySubject<Ciudad[]>(1);

  //state control
  public selectedState = "Activas";
  public estados=["Activas","Finalizadas"];

  protected _onDestroy = new Subject<void>();

  constructor(
    private firestore: AngularFirestore,
    private firestoreService: FireBaseService,
    public router: Router,

  ) {

  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  ngOnInit(): void {
    this.getCiudades();
  
    this.getEvents("Todas","Activas","");

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
    this.firestoreService.getEvents(ciudad,"Convocatorias",estado).subscribe((eventsSnapshot) => {
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

  setFecha(){
    var fecha;
    if(this.selectedDate!=""){
      fecha=new Date(this.selectedDate);
      var anioSelec = fecha.getFullYear();
        var mesSelec = fecha.getMonth() + 1;
        var diaSelec = fecha.getUTCDate();
        var periodoSeleccionado;
        if (mesSelec < 10) {
          if(diaSelec<10){
            periodoSeleccionado = `0${diaSelec}/0${mesSelec}/${anioSelec}`; 
          }else{  
            periodoSeleccionado = `${diaSelec}/0${mesSelec}/${anioSelec}`; 
          }
        } else {
          if(diaSelec<10){
            periodoSeleccionado = `0${diaSelec}/0${mesSelec}/${anioSelec}`; 
          }else{  
            periodoSeleccionado = `${diaSelec}/0${mesSelec}/${anioSelec}`; 
          }
        }
      return periodoSeleccionado;
    } 
    return this.selectedDate;
}

  getCiudades(){
    this.firestoreService.getCiudades("todas").subscribe((ciudadesSnapshot) => {
      this.ciudades = [];
      this.ciudades.push({id: '',name:'Todas',idProvince:"www"})
      ciudadesSnapshot.forEach((ciudades: any) => {
        
        //var elemento = ciudades.payload.doc.data()
        var elemento = {...ciudades.payload.doc.data() , ['id'] : ciudades.payload.doc.id}
        if(this.ciudades.includes(elemento)){
            
        }else{
            this.ciudades.push(elemento);
        }
       
      });
      this.cityCtrl.setValue(this.ciudades[0]);

      this.filteredCities.next(this.ciudades.slice());

      this.cityFilterCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterCities();
        });    
    })


  }

  protected filterCities() {
    if (!this.ciudades) {
      return;
    }
    let search = this.cityFilterCtrl.value;
    if (!search) {
      this.filteredCities.next(this.ciudades.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredCities.next(
      this.ciudades.filter(city => city.name.toLowerCase().indexOf(search) > -1)
    );
  }

  select(){
    this.getEvents(this.cityCtrl.value.id,this.selectedState,this.setFecha());
  }

}