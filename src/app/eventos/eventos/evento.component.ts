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
import { MatDialog } from '@angular/material/dialog';
import { LoadingContentExampleDialog } from 'src/app/loading/loading.component';
import { AuthService } from '../../services/auth.service';

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
  usuario: any;
  user: any;
  public condicioneventovacio = false;

  //date control
  selectedDate : Date;
  

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
    public dialog: MatDialog,
    private AuthService: AuthService,
  ) {

  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  async ngOnInit(): Promise<void> {
    this.dialog.open(LoadingContentExampleDialog);
    this.getCiudades();
    this.selectedDate=new Date();
    this.getEvents("Todas","Activas",this.setFecha());
    this.user = await this.AuthService.getCurrentUser();
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

  redirectCampaignDetail(value) {
    let idCampaign = value.idCampaign;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "campU":false,
      }
    };
    this.router.navigate(["detalleCampana",idCampaign], navigationExtras);
  }


  getEvents(ciudad,estado,fechaSeleccionada): void {
    console.log(ciudad,",estado: ",estado,",fecha:",fechaSeleccionada);
    this.events = [];
    this.firestoreService.getEvents(ciudad,"Convocatorias",estado).subscribe((eventsSnapshot) => {
      eventsSnapshot.forEach((event: any) => {
        let isFav : boolean;
        if (eventsSnapshot.length == 0) {
          this.condicioneventovacio = true;
        } else {
          this.condicioneventovacio = false;
        }
        if(this.user!=null){
          this.firestoreService.checkFollowEvents(this.user.uid,event.payload.doc.id).subscribe((snp) => {
            if(snp.length>0){
              isFav = true;
            }
            else if(snp.length==0){
              isFav=false;
            }
          });
        }
        if(this.user==null){
          isFav=false;
        }
        this.firestoreService.getCampañasById(event.payload.doc.data().idCampaign).subscribe((campaignSNP) => {
          this.firestoreService.getCiudadById(event.payload.doc.data().city).subscribe((citysnp) => {
            let temp=campaignSNP.payload.data();
            let ciudad = citysnp.payload.data();
            var fechaEvento=event.payload.doc.data().dateEvent.split(",")[0];
            let appObj = { ...event.payload.doc.data(),['campana']:temp,['isFavorite']: isFav,['ciudad']:ciudad,eventId: event.payload.doc.id}
            if(fechaSeleccionada!=null &&fechaSeleccionada <= fechaEvento && this.selectedState!='Finalizadas'){ 
              if(!this.events.some((item) => item.eventId == appObj.eventId)){
                this.events.push(appObj);
              }
            }else if(fechaSeleccionada==null){
              if(!this.events.some((item) => item.eventId == appObj.eventId)){
                this.events.push(appObj);
              }
            }
          });
          
        
        });

        
      });
      this.events.sort(this.sortFunction);
      console.log('ordenado', this.events)
      this.dialog.closeAll();
    }, (error) => {
      console.log("Error al cargar los eventos", error)
    });
    

  }


  sortFunction(a, b) {
    let fecha = a.dateEvent.split(',')[0];
    let fechaA = fecha.substr(3, 2)+"/"+fecha.substr(0, 2)+"/"+fecha.substr(6, 4);
    fecha = b.dateEvent.split(',')[0];
    let fechaB = fecha.substr(3, 2)+"/"+fecha.substr(0, 2)+"/"+fecha.substr(6, 4);
    var dateA = new Date(fechaA);
    var dateB = new Date(fechaB);
    return dateA < dateB ? 1 : -1;
  };

  setFecha(){
    var fecha;
    if(this.selectedDate!=null){
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
    if(this.selectedState=="Finalizadas"){
      this.selectedDate=null;
    }
    if(this.selectedState=="Activas"){
      this.selectedDate=new Date();
    }
    this.getEvents(this.cityCtrl.value.id,this.selectedState,this.setFecha());
  }

}