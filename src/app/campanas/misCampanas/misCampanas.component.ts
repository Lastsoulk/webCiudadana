import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FireBaseService, ICampaña } from '../../services/fire-base.service';
import { NavigationExtras, Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import firebase from "firebase/app";
import { DatePipe } from '@angular/common';
import { LoadingContentExampleDialog } from 'src/app/loading/loading.component';

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
    providers: [DatePipe]
})
export class misCampanas {
    condicioncampanavacia = false;

    myArray: any[] = []
    public dataSource = new MatTableDataSource<misCampanas>();

    public campaigns = [];
    public categories = [];
    
    public arregloEstados = ["Todas", "Aprobadas", "Negadas","Pendientes","Finalizadas"];
    public estadoCampana = this.arregloEstados[0];
    // public usuario;
    // public user$: Observable<firebase.User> = this.AuthService.afAuth.user;


    public user$: Observable<firebase.User> = this.AuthService.afAuth.user;
    public datosUsuario;
    
    myDate = new Date();


    constructor(
        private firestore: AngularFirestore,
        private firestoreService: FireBaseService,
        public router: Router,
        public dialog: MatDialog,
        private AuthService: AuthService,
        private datePipe: DatePipe,
    ) {

    }   

    async ngOnInit() {
        const user = await this.AuthService.getCurrentUser();
        //console.log(user);
        this.datosUsuario = user.uid;
        console.log('user: ', this.datosUsuario)
        
        this.getCampaigns(this.estadoCampana);
        this.dataSource.filterPredicate = (data: misCampanas, filter: string): boolean => {
            const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
                console.log((data as { [key: string]: any })[key]);
                return (currentTerm + (data as { [key: string]: any })[key]);
            }, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            const transformedFilter = filter.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            return dataStr.indexOf(transformedFilter) != -1;
        }
        this.dialog.open(LoadingContentExampleDialog);
    }

    getCampaigns(estado): void {

        this.firestoreService.getCampañasUsuario(estado, this.datosUsuario).subscribe((campaignsSnapshot) => {
            this.campaigns = [];
            this.categories = [];
            if (campaignsSnapshot.length == 0) {
                this.condicioncampanavacia = true;
              } else {
                  this.condicioncampanavacia = false;
              }

            
            campaignsSnapshot.forEach((campaign: any) => {
                console.log(campaign.payload.doc.data());
                this.firestoreService.getDatosUser(campaign.payload.doc.data().promoter).subscribe((userSnapshot) => {
                    let temp=userSnapshot.payload.data();
                    this.firestoreService.getAutoridad(campaign.payload.doc.data().authority).subscribe((userAutoriSnapshot) => {
                      let tempo=userAutoriSnapshot.payload.data();
                      let appObj = { ...campaign.payload.doc.data(),['promotore']: temp, ['autority']: tempo ,campaignId: campaign.payload.doc.id}
                      if(!this.campaigns.some((item) => item.campaignId == appObj.campaignId)){
                        this.campaigns.push(appObj);
                      }
                      this.dialog.closeAll();
                    });
      
                  });
                

            });

        }, (error) => {
            console.log("Error al cargar las campañas", error)
        });
        // });

        

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