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
    selector: 'mis-eventos',
    templateUrl: './misEventos.component.html',
    styleUrls: ['./misEventos.component.css'],
})
export class misEventos {
    condicioncampanavacia = false;

    myArray: any[] = []
    public dataSource = new MatTableDataSource<misEventos>();

    public eventos = [];
    public categories = [];
    public estadoCampana = "";
    public arregloEstados = ["negadas", "pendientes", "aprobadas", "todos"];
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

        console.log('hola hugi')



        this.firestoreService.getEventosUsuario(estado, this.datosUsuario).subscribe((campaignsSnapshot) => {
            this.eventos = [];
            this.categories = [];
            campaignsSnapshot.forEach((event: any) => {
                this.eventos.push({
                  name: event.payload.doc.data().name,
                    address: event.payload.doc.data().address,
                    description: event.payload.doc.data().description,
                    eventId: event.payload.doc.id,
                    eventPic: event.payload.doc.data().eventPic,
                    state: event.payload.doc.data().state,
                    dateEvent: event.payload.doc.data().dateEvent,
                    city: event.payload.doc.data().city,
                    type: event.payload.doc.data().type

                });
            });
            console.log("this.campaigns", this.eventos);
            console.log(this.eventos.length);
            console.log("aplicado el filtro");
            if (this.eventos.length == 0) {
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

        this.dataSource.filterPredicate = (data: misEventos, filter: string): boolean => {
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