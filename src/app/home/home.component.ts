import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FireBaseService, ICampaña } from '../services/fire-base.service';
import { NavigationExtras, Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable, combineLatest, of } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'
import { uniq, flatten } from 'lodash'
import { Campana } from '../campanas/campanas/campanas.component';


/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'card-fancy-example',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class CardFancyExample implements OnInit {
    images = ["assets/img/carrusel1.jpg", "assets/img/carrusel2.jpg", "assets/img/carrusel3.jpg"];

    myArray: any[] = []
    events: any[] = []
    joined$: Observable<any>


    constructor(
        private firestore: AngularFirestore,
        public router: Router,
        private firestoreService: FireBaseService,
    ) {
    }

    ngOnInit(): void {
        
        this.firestoreService.getCampanasActivas().subscribe((campaignsSnapshot) => {
            var i=0;
                campaignsSnapshot.forEach((campaign: any) => {

                    if(i<=6){
                        let fechaActual = new Date();
                        var fechaInicio=this.formatoFecha(campaign.payload.doc.data().dateStart.split(',')[0]);
                        var fechaFin= this.formatoFecha(campaign.payload.doc.data().dateEnd.split(',')[0]);
                    
                        if (fechaActual>=fechaInicio && fechaActual<=fechaFin && campaign.payload.doc.data().state.running){
                            
                            this.firestoreService.getDatosUser(campaign.payload.doc.data().promoter).subscribe((userSnapshot) => {
                                let temp=userSnapshot.payload.data();
                                this.firestoreService.getAutoridad(campaign.payload.doc.data().authority).subscribe((userAutoriSnapshot) => {
                                  
                                  let tempo=userAutoriSnapshot.payload.data();
                                  let appObj = { ...campaign.payload.doc.data(),['promotore']: temp, ['autority']: tempo ,campaignId: campaign.payload.doc.id}
                                  //console.log(appObj);
                                  if(!this.myArray.some((item) => item.campaignId == appObj.campaignId)){
                                    this.myArray.push(appObj);
                                  }
                                });
                  
                              });
                        }
                        i++;
                    }
                });
             
        }), (error) => {
        console.log("Error al cargar las campañas", error);
        }

        console.log('aqui estamos en home');
        console.log('----CAMPANAS------');
        console.log(this.myArray)

        this.firestoreService.getEvents("Todas","Todas","Activas").subscribe((eventSnapshot) => {
            var i=0;
            eventSnapshot.forEach((event: any) => {
                if(i<=6){
                    let fechaActual = new Date();
                    var fechaEvento=this.formatoFecha(event.payload.doc.data().dateEvent.split(',')[0]);

                    if (fechaActual<= fechaEvento ){
                        this.events.push({
                            name: event.payload.doc.data().name,
                            type: event.payload.doc.data().type,
                            eventPic: event.payload.doc.data().eventPic,
                            numFollowers: event.payload.doc.data().numFollowers,
                            
                        });
                    }
                }
                i++;
            });
            this.events.sort(function (a, b) {
                if (a.numFollowers > b.numFollowers) {
                  return 1;
                }
                if (a.numFollowers < b.numFollowers) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });
        }), (error) => {
        console.log("Error al cargar las campañas", error);
        }
        console.log('---EVENTOS---');
        console.log(this.events);
    }    
    formatoFecha(fecha:string){
        fecha = fecha.substr(3, 2)+"/"+fecha.substr(0, 2)+"/"+fecha.substr(6, 4);
        return new Date(Date.parse(fecha));
        
    }

    moveToSelectedTab(tabName: string) {
        for (let i = 0; i < document.querySelectorAll('.mat-tab-label-content').length; i++) {
            if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName) {
                (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
            }
        }
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



}