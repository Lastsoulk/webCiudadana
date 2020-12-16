import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    bounceAnimation,
} from 'angular-animations';
import { NavigationExtras, Router } from '@angular/router';

@Component({
    selector: 'dialog-content',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.css'],
    animations: [
        bounceAnimation(),
    ]
})
export class DialogContentExampleDialog implements AfterViewInit {
    animationState = false;

    animate() {
        this.animationState = !this.animationState;
    }

    constructor(public router: Router) {
    }

    ngAfterViewInit() {
        this.animate();
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