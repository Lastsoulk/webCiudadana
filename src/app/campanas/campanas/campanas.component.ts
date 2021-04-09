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


    async ngOnInit() {


        this.getCampaigns("");
        this.getCategorias();
     
        //this.crearCampaign();

    

      
    }
  
  getCiudades(){

    
        
        this.firestoreService.getCiudades().subscribe((ciudadesSnapshot) => {
          this.ciudades = [];
          ciudadesSnapshot.forEach((ciudades: any) => {
            var elemento = ciudades.payload.doc.data().city
            if(this.ciudades.includes(elemento)){
                
            }else{
                const add = this.ciudades.push(elemento)
            }
            // var lista = evento.payload.doc.data().address
            // var ciudad = lista.split(', ')

            // if(ciudad.length>1){
            //   var temp = ciudad[1].split(' ')

            //   var agregar = ''
            //   if(isNaN(temp[temp.length-1])){
            //     agregar = ciudad[1]

            //   }else{
            //     agregar = temp.slice(0,-1).join(' ')
        

            //   }
          
            //   if(this.ciudades.includes(agregar)){
                
            //   }else{
            //     const add = this.ciudades.push(agregar)
            //   }
              
            // }
           
      });

      console.log('ciudades--')
    console.log(this.ciudades)
    
    })
    

  }


  getCampaigns(categoria): void {
    if(categoria=="Todas"){
      categoria="";
    }
    this.firestoreService.getCampañasCategoria(categoria).subscribe((campaignsSnapshot) => {
      this.campaigns = [];
      this.categories = [];
      
      campaignsSnapshot.forEach((campaign: any) => {
          console.log(campaign.payload.doc.data());
          //console.log(campaign.payload.doc.data().state);
          if(campaign.payload.doc.data().state.running){
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
          }
          
      });
      console.log(this.campaigns.length);
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
  
  

  getCategorias(){
    this.firestoreService.getCategorias().subscribe((campaignsSnapshot) => {
      this.listaCategorias = [];
      this.listaCategorias.push({idCategoria: '',nombre:'Todas'})
      campaignsSnapshot.forEach((cat: any) => {
        this.listaCategorias.push({
          idCategoria: cat.payload.doc.data(),
          nombre: cat.payload.doc.data().name,

        });
      });
      
      this.selectedCategory= this.listaCategorias[0].nombre;
    }), (error) => {
      console.log("Error al cargar las campañas", error);
    }
    
  }



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
 
  isFavoritee(elem: any) {
    this.isFavorite[elem] = !this.isFavorite[elem];
    // Add other code here
  }

}