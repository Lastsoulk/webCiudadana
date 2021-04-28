import { Component, OnInit } from '@angular/core';
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
/**
 * @title Card with multiple sections
 */



interface Ciudad {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'campanas',
  templateUrl: './campanas.component.html',
  styleUrls: ['./campanas.component.css'],
})
export class Campana {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  myArray: any[] = []
  public dataSource = new MatTableDataSource<Campana>();
  public dataSource2 = new MatTableDataSource<Campana>();
  public listaCategorias: any[] = []
  public selectedCategory;

  public campaigns = [];
  public campaigns2 = [];
  public categories = [];
  public ciudades = []
  condicioncampanavacia = false;


  isFavorite: boolean[] = [];


 // public producto = [{name:'campana adam',numFollowers:2}];

  constructor(
    private firestore: AngularFirestore,
    private firestoreService: FireBaseService,
    public router: Router,
    private AuthService: AuthService,
    public dialog: MatDialog,
  ) {

  }


    async ngOnInit() {


        this.getCampaigns("");
        this.getCategorias();
        //this.crearCampaign();
        
    }
  
  getCiudades(){
        this.firestoreService.getCiudades("todas").subscribe((ciudadesSnapshot) => {
          this.ciudades = [];
          ciudadesSnapshot.forEach((ciudades: any) => {
            var elemento = ciudades.payload.doc.data().city
            if(this.ciudades.includes(elemento)){
                
            }else{
                const add = this.ciudades.push(elemento)
            }
           
      });

      console.log('ciudades--')
    console.log(this.ciudades)
    
    })
    

  }


  getCampaigns(categoria): void {
    this.dialog.open(LoadingContentExampleDialog);
    console.log(categoria);
    if(categoria=="Todas"){
      categoria="";
    }
    this.firestoreService.getCampañasCategoria(categoria).subscribe((campaignsSnapshot) => {
      this.campaigns = [];
      //this.categories = [];
      this.dialog.closeAll();
      if (campaignsSnapshot.length == 0) {
        this.condicioncampanavacia = true;
      } else {
          this.condicioncampanavacia = false;
      }
      campaignsSnapshot.forEach(async (campaign: any) => {
          
          //console.log(campaign.payload.doc.data());
          if(campaign.payload.doc.data().state.running){
            this.firestoreService.getDatosUser(campaign.payload.doc.data().promoter).subscribe((userSnapshot) => {
              let temp=userSnapshot.payload.data();
              this.firestoreService.getAutoridad(campaign.payload.doc.data().authority).subscribe((userAutoriSnapshot) => {
                
                let tempo=userAutoriSnapshot.payload.data();
                let appObj = { ...campaign.payload.doc.data(),['promotore']: temp, ['autority']: tempo ,campaignId: campaign.payload.doc.id}
                //console.log(appObj);
                if(!this.campaigns.some((item) => item.campaignId == appObj.campaignId)){
                  this.campaigns.push(appObj);
                }
              });

            });

          }
          
      });
      console.log(this.campaigns);
  }, (error) => {
      console.log("Error al cargar las campañas", error)
  });

    

  }


  getDatosUser(dato:any){
    this.firestoreService.getDatosUser(dato).subscribe((userSnapshot) => {

      }, (error) => {
        console.log(error)
      });
  }

  

  getCategorias(){
    this.firestoreService.getCategorias().subscribe((campaignsSnapshot) => {
      this.listaCategorias = [];
      this.listaCategorias.push({idCategoria: '',name:'Todas'})
      campaignsSnapshot.forEach((cat: any) => {
        //console.log(cat.payload.doc.data());
        this.listaCategorias.push({
          idCategoria: cat.payload.doc.data(),
          name: cat.payload.doc.data().name,

        });
      });
      
      this.selectedCategory= this.listaCategorias[0].name;
    }), (error) => {
      console.log("Error al cargar las campañas", error);
    }
    
  }



  redirectCampaignDetail(value) {
    let campaignId = value.campaignId;
    console.log(campaignId);
    //  console.log("aqui abajo",bandera)


    let navigationExtras: NavigationExtras = {
      queryParams: {
        "camp": JSON.stringify(campaignId),
        "misCampanas": false,
        "estadoCampana":false,
        "campanaUsuario":false,
        // "estadoNegado": bandera,

      }
    };
    this.router.navigate(["detalleCampana"], navigationExtras);




  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  isFavoritee(elem: any) {
    this.isFavorite[elem] = !this.isFavorite[elem];
    // Add other code here
  }

}