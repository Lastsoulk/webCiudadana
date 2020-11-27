import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    bounceAnimation,
} from 'angular-animations';

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

    constructor() {
    }

    ngAfterViewInit() {
        this.animate();
    }


}