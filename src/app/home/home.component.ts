import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FireBaseService, ICampaña } from '../services/fire-base.service';
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

    constructor(
        private firestore: AngularFirestore
    ) {

    }

    ngOnInit(): void {
        this.firestore
            .collection("Campañas")
            .get()
            .subscribe((ss) => {
                ss.docs.forEach((doc) => {
                    this.myArray.push(doc.data());
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
}