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
    ) {

    }

    ngOnInit(): void {
        this.firestore
            .collection("campaigns")
            .get()
            .subscribe((ss) => {
                ss.docs.forEach((doc) => {
                    this.myArray.push(doc.data());
                });
            });
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