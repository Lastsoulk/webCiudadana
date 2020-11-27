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
    selector: 'mis-campanas',
    templateUrl: './misCampanas.component.html',
    styleUrls: ['./misCampanas.component.css'],
})
export class misCampanas {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

    myArray: any[] = []
    public dataSource = new MatTableDataSource<misCampanas>();

    public campaigns = [];
    public categories = [];
    public estadoCampana = "";
    public arregloEstados = ["negadas","pendientes","aprobadas","todas"];
    // public usuario;
    // public user$: Observable<firebase.User> = this.AuthService.afAuth.user;

    constructor(
        private firestore: AngularFirestore,
        private firestoreService: FireBaseService,
        public router: Router,
        
    ) {

    }


    getCampaigns(estado): void {
            
            // estado.subscribe(res=>{

            //     this.estadoCampana = estado;



                this.firestoreService.getCampañas1(estado).subscribe((campaignsSnapshot) => {
                this.campaigns = [];
                this.categories = [];
                campaignsSnapshot.forEach((campaign: any) => {
                this.campaigns.push({
                campaignInfo: campaign.payload.doc.data(),
                campaignPic: campaign.payload.doc.data().campaignPic,
                category : campaign.payload.doc.data().categories,
                campaignId: campaign.payload.doc.data().campaignId,
                campaignUpdateId: campaign.payload.doc.id,
                name: campaign.payload.doc.data().name,
                description: campaign.payload.doc.data().description,
                promoter: campaign.payload.doc.data().promoter,
                categories: campaign.payload.doc.data().categories,
                dateStart: campaign.payload.doc.data().dateStart,
                numFollowers: campaign.payload.doc.data().numFollowers,
                state: campaign.payload.doc.data().state,
                //state: this.stateToStringGlobal(campaign.payload.doc.data().state),

                    });
                });
                console.log("this.campaigns", this.campaigns);
                // this.dataSource.data = this.campaigns as Campaign[];
                }, (error) => {
                console.log("Error al cargar las campañas", error)
                });
                // });
        
        }


    ngOnInit(): void {
 

        this.getCampaigns(this.estadoCampana);

        // const user = await this.AuthService.getCurrentUser();
        //     this.user$.subscribe(res=>{
        //     this.usuario = res;
        //     }
        //)

        this.dataSource.filterPredicate = (data: misCampanas, filter: string): boolean => {
        const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
            console.log((data as { [key: string]: any })[key]);
            return (currentTerm + (data as { [key: string]: any })[key]);
        }, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        const transformedFilter = filter.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        return dataStr.indexOf(transformedFilter) != -1;
        }
  }

    
    redirectCampaignDetail(value){
        let campaignId = value.campaignId;
        
  
   
        let navigationExtras: NavigationExtras = {
        queryParams: {
          "camp": JSON.stringify(campaignId),
          "misCampanas":true,
         
                    }
        };
        this.router.navigate(["detalleCampana"],  navigationExtras);
    }

    public doFilter = (value: string) => {
        this.dataSource.filter = value.trim().toLocaleLowerCase();
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    ciudades: Ciudad[] = [
        { value: 'ciudad-0', viewValue: 'Guayaquil' },
        { value: 'ciudad-1', viewValue: 'Quito' },
        { value: 'ciudad-2', viewValue: 'Cuenca' }
    ];
}