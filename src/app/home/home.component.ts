import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FireBaseService, ICampaña } from '../services/fire-base.service';
import { NavigationExtras, Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";

/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'card-fancy-example',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class CardFancyExample implements OnInit {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

    myArray: any[] = []
    events: any[] = []

    constructor(
        private firestore: AngularFirestore,
        public router: Router,
        private firestoreService: FireBaseService,
    ) {

    }

    ngOnInit(): void {

        this.firestoreService.getCampanasActivas().subscribe((campaignsSnapshot) => {
        campaignsSnapshot.forEach((campaign: any) => {
        this.myArray.push({
          campaignInfo: campaign.payload.doc.data(),
          campaignPic: campaign.payload.doc.data().campaignPic,
          category: campaign.payload.doc.data().categories,
          //campaignId: campaign.payload.doc.data().campaignId,
          //campaignUpdateId: campaign.payload.doc.id,
          campaignId: campaign.payload.doc.id,
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
        //console.log("this.campaigns", this.campaigns);
        // this.dataSource.data = this.campaigns as Campaign[];
        }), (error) => {
        console.log("Error al cargar las campañas", error);
        }

        console.log('aqui estamos en home');
        console.log(this.myArray)

        // this.firestore
        //     .collection("campaigns")
        //     .get()
        //     .subscribe((ss) => {
        //         ss.docs.forEach((doc) => {
        //             this.myArray.push(doc.data());
        //         });
        //     });
        this.firestore
            .collection("events")
            .get()
            .subscribe((ss) => {
                ss.docs.forEach((doc) => {
                    this.events.push(doc.data());
                });
            });
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