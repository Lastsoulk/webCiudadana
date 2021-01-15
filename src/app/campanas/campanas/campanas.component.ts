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

  public campaigns = [];
  public campaigns2 = [];
  public categories = [];
  condicioncampanavacia = false;

 // public producto = [{name:'campana adam',numFollowers:2}];

  constructor(
    private firestore: AngularFirestore,
    private firestoreService: FireBaseService,
    public router: Router,
    private AuthService: AuthService,

  ) {

  }



  // getCampaigns(categoria): void {
  //       this.firestoreService.getCampañasUsuario(estado, this.datosUsuario).subscribe((campaignsSnapshot) => {
  //           this.campaigns = [];
  //           this.categories = [];
  //           campaignsSnapshot.forEach((campaign: any) => {
  //               this.campaigns.push({
  //                   campaignInfo: campaign.payload.doc.data(),
  //                   campaignPic: campaign.payload.doc.data().campaignPic,
  //                   category: campaign.payload.doc.data().categories,
  //                   campaignId: campaign.payload.doc.id,
  //                   //campaignUpdateId: campaign.payload.doc.id,
  //                   name: campaign.payload.doc.data().name,
  //                   description: campaign.payload.doc.data().description,
  //                   promoter: campaign.payload.doc.data().promoter,
  //                   categories: campaign.payload.doc.data().categories,
  //                   dateStart: campaign.payload.doc.data().dateStart,
  //                   numFollowers: campaign.payload.doc.data().numFollowers,
  //                   state: campaign.payload.doc.data().state,
  //                   //state: this.stateToStringGlobal(campaign.payload.doc.data().state),

  //               });
  //           });
  //           console.log("this.campaigns", this.campaigns);
  //           console.log(this.campaigns.length);
  //           console.log("aplicado el filtro");
  //           if (this.campaigns.length == 0) {
  //               this.condicioncampanavacia = true;
  //           } else {
  //               this.condicioncampanavacia = false;
  //           }
  //           // this.dataSource.data = this.campaigns as Campaign[];
  //       }, (error) => {
  //           console.log("Error al cargar las campañas", error)
  //       });
  //       // });

  //   }



  getCampaigns(categoria): void {
    this.firestoreService.getCampañasCategoria(categoria).subscribe((campaignsSnapshot) => {
      this.campaigns = [];
      this.categories = [];
      campaignsSnapshot.forEach((campaign: any) => {
          this.campaigns.push({
              campaignInfo: campaign.payload.doc.data(),
              campaignPic: campaign.payload.doc.data().campaignPic,
              category: campaign.payload.doc.data().categories,
              campaignId: campaign.payload.doc.id,
              //campaignUpdateId: campaign.payload.doc.id,
              name: campaign.payload.doc.data().name,
              description: campaign.payload.doc.data().description,
              promoter: campaign.payload.doc.data().promoter,
              categories: campaign.payload.doc.data().categories,
              dateStart: campaign.payload.doc.data().dateStart,
              numFollowers: campaign.payload.doc.data().numFollowers,
              state: campaign.payload.doc.data().state,
              categoria: campaign.payload.doc.data().categories,
              //state: this.stateToStringGlobal(campaign.payload.doc.data().state),

          });
      });
      console.log("this.campaigns", this.campaigns);
      console.log(this.campaigns.length);
      console.log("aplicado el filtro");
      if (this.campaigns.length == 0) {
          this.condicioncampanavacia = true;
      } else {
          this.condicioncampanavacia = false;
      }
      // this.dataSource.data = this.campaigns as Campaign[];
  }, (error) => {
      console.log("Error al cargar las campañas", error)
  });

    

    }
  


  

  
  
  async ngOnInit() {


    this.getCampaigns("");
    this.getCategorias();
    //this.crearCampaign();

 

   
  }

  getCategorias(){
    this.firestoreService.getCategorias().subscribe((campaignsSnapshot) => {
      this.listaCategorias = [];
      this.listaCategorias.push({idCategoria: '',nombre:'Todas'})
      campaignsSnapshot.forEach((cat: any) => {
        console.log(cat)
        this.listaCategorias.push({
          idCategoria: cat.payload.doc.data(),
          nombre: cat.payload.doc.data().name,

        });
      });
      
      console.log("this.categorias", this.listaCategorias);
      // this.dataSource.data = this.campaigns as Campaign[];
    }), (error) => {
      console.log("Error al cargar las campañas", error);
    }

  }


  //   crearCampaign(){
  //   console.log('Aqui llamaremos')
  //   console.log(this.producto)
  //   this.firestoreService.crearCampaña(this.producto);
    
  //   // .subscribe(
  //   //   (response)=>console.log(response),
  //   //   (error)=>{
  //   //       console.log('error de crear1');
  //   //       console.log(error);
  //   //   }
  //   // )
  // }


  redirectCampaignDetail(value) {
    let campaignId = value.campaignId;
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
 
}