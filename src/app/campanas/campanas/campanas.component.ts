import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FireBaseService, ICampaña } from '../../services/fire-base.service';
import { NavigationExtras, Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoadingContentExampleDialog } from 'src/app/loading/loading.component';
import { MatSelectSearchVersion } from 'ngx-mat-select-search';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material/select';
import { take, takeUntil } from 'rxjs/operators';
/**
 * @title Card with multiple sections
 */



interface Ciudad {
  id: string;
  idProvince:string;
  name: string;
}

interface Categoria {
  name: string;
  id:string;
}

@Component({
  selector: 'campanas',
  templateUrl: './campanas.component.html',
  styleUrls: ['./campanas.component.css'],
})
export class Campana implements OnInit, OnDestroy {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  myArray: any[] = []
  public dataSource = new MatTableDataSource<Campana>();
  public dataSource2 = new MatTableDataSource<Campana>();
  

  public campaigns = [];

  
  condicioncampanavacia = false;


  
  public selectedState = "Activas";
  public estados=["Activas","Finalizadas"];
  isFavorite: boolean[] = [];

  //category control
  public listaCategorias: any[] = []
  public selectedCategory;
  public categoryCtrl: FormControl = new FormControl();
  public categoryFilterCtrl: FormControl = new FormControl();
  public filteredCategories: ReplaySubject<Categoria[]> = new ReplaySubject<Categoria[]>(1);

  //city control
  public ciudades = [];
  public selectedCity;
  public cityCtrl: FormControl = new FormControl();
  public cityFilterCtrl: FormControl = new FormControl();
  public filteredCities: ReplaySubject<Ciudad[]> = new ReplaySubject<Ciudad[]>(1);


  usuario: any;
  user: any;

  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

  protected _onDestroy = new Subject<void>();

  constructor(
    private firestore: AngularFirestore,
    private firestoreService: FireBaseService,
    public router: Router,
    private AuthService: AuthService,
    public dialog: MatDialog,
  ) {

  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }


    async ngOnInit() {
        this.getCampaigns("Todas","","Activas");
        this.getCategorias();
        //this.crearCampaign();
        this.getCiudades();
        this.user = await this.AuthService.getCurrentUser();
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


  getCampaigns(categoria:any,ciudad:any,estado:any): void {
    this.dialog.open(LoadingContentExampleDialog);
    this.firestoreService.getCampañasCategoria(categoria,ciudad,estado).subscribe((campaignsSnapshot) => {
      this.campaigns = [];
      
      if (campaignsSnapshot.length == 0) {
        this.condicioncampanavacia = true;
      } else {
          this.condicioncampanavacia = false;
      }
      
      campaignsSnapshot.forEach(async (campaign: any) => {
        let campaignID = campaign.payload.doc.id;
        let isFav : boolean;
        if(this.user!=null){
          this.firestoreService.checkFollow(this.user.uid,campaignID).subscribe((snp) => {
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
        this.firestoreService.getDatosUser(campaign.payload.doc.data().promoter).subscribe((userSnapshot) => {
          let temp=userSnapshot.payload.data();
          this.firestoreService.getAutoridad(campaign.payload.doc.data().authority).subscribe((userAutoriSnapshot) => {
            let tempo=userAutoriSnapshot.payload.data();
            let appObj = { ...campaign.payload.doc.data(),['promotore']: temp, ['isFavorite']: isFav,['autority']: tempo ,campaignId: campaign.payload.doc.id}
                
            if(!this.campaigns.some((item) => item.campaignId == appObj.campaignId)){
              this.campaigns.push(appObj);
            }
          });
        });
      });
      this.dialog.closeAll();
    }, (error) => {
      console.log("Error al cargar las campañas", error)
    });

  }

  formatoFecha(fecha:string){
    fecha = fecha.substr(3, 2)+"/"+fecha.substr(0, 2)+"/"+fecha.substr(6, 4);
    return new Date(Date.parse(fecha));
    
}

  getCategorias(){
    this.firestoreService.getCategorias().subscribe((campaignsSnapshot) => {
      this.listaCategorias = [];
      this.listaCategorias.push({name:'Todas',id:"www"})
      campaignsSnapshot.forEach((cat: any) => {
        this.listaCategorias.push({
          name: cat.payload.doc.data().name,
          id : cat.payload.doc.id
        });
      });

      this.categoryCtrl.setValue(this.listaCategorias[0]);

      this.filteredCategories.next(this.listaCategorias.slice());

      this.categoryFilterCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterCategories();
        });    
    }), (error) => {
      console.log("Error al cargar las categorias", error);
    }
    

    
  }



  redirectCampaignDetail(value) {
    let campaignId = value.campaignId;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "campU":false,
      }
    };
    this.router.navigate(["detalleCampana",campaignId], navigationExtras);
  }


  select(event:any){
    this.getCampaigns(this.categoryCtrl.value.name,this.cityCtrl.value.id,this.selectedState);
  }
 
  isFavoritee(elem: any) {
    this.isFavorite[elem] = !this.isFavorite[elem];
    // Add other code here
  }


  protected filterCategories() {
    if (!this.listaCategorias) {
      return;
    }
    let search = this.categoryFilterCtrl.value;
    if (!search) {
      this.filteredCategories.next(this.listaCategorias.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredCategories.next(
      this.listaCategorias.filter(category => category.name.toLowerCase().indexOf(search) > -1)
    );
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

}