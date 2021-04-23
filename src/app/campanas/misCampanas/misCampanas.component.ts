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
import { Observable } from 'rxjs';
import firebase from "firebase/app";

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
    condicioncampanavacia = false;

    myArray: any[] = []
    public dataSource = new MatTableDataSource<misCampanas>();

    public campaigns = [];
    public categories = [];
    public estadoCampana = "";
    public arregloEstados = ["negadas", "pendientes", "aprobadas", "todas"];
    // public usuario;
    // public user$: Observable<firebase.User> = this.AuthService.afAuth.user;


    public user$: Observable<firebase.User> = this.AuthService.afAuth.user;
    public datosUsuario;
    


    constructor(
        private firestore: AngularFirestore,
        private firestoreService: FireBaseService,
        public router: Router,

        private AuthService: AuthService,

    ) {

    }


    getCampaigns(estado): void {

        // estado.subscribe(res=>{

        //     this.estadoCampana = estado;



        this.firestoreService.getCampañasUsuario(estado, this.datosUsuario).subscribe((campaignsSnapshot) => {
            this.campaigns = [];
            this.categories = [];
            campaignsSnapshot.forEach((campaign: any) => {
                console.log(campaign.payload.doc.data());
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
                    //state: this.stateToStringGlobal(campaign.payload.doc.data().state),

                });
            });

            if (this.campaigns.length == 0) {
                this.condicioncampanavacia = true;
            } else {
                this.condicioncampanavacia = false;
            }
            // this.dataSource.data = this.campaigns as Campaign[];
        }, (error) => {
            console.log("Error al cargar las campañas", error)
        });
        // });

        

    }

    


    async ngOnInit() {




        const user = await this.AuthService.getCurrentUser();
        this.datosUsuario = user.uid;
        console.log('user: ', this.datosUsuario)
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


    redirectCampaignDetail(value) {
        let campaignId = value.campaignId;
        let estadoCampana = value.estadoCampana;

        console.log('aca: ', estadoCampana);

        let navigationExtras: NavigationExtras = {
            queryParams: {
                "camp": JSON.stringify(campaignId),
                "estadoCampana": estadoCampana,
                "campanaUsuario":true,

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

    cambiarPestana(pestana) {
        //     let campaignId = value.campaignId;
        //   //  let campaignUpdateId = value.campaignUpdateId;
        //     let data = {'camp':campaignId}//'upd':campaignUpdateId}
        let navigationExtras: NavigationExtras = {
            queryParams: {
                pestana: pestana,
                //   "upd" : JSON.stringify(campaignUpdateId)
            }
        };
        this.router.navigate([pestana], navigationExtras);
    }


    ciudades: Ciudad[] = [
        { value: 'ciudad-0', viewValue: 'Guayaquil' },
        { value: 'ciudad-1', viewValue: 'Quito' },
        { value: 'ciudad-2', viewValue: 'Cuenca' }
    ];
}