import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    bounceAnimation,
} from 'angular-animations';
import { NavigationExtras, Router } from '@angular/router';

@Component({
    selector: 'loading-content',
    templateUrl: 'loading.component.html',
    styleUrls: ['loading.component.css'],
    animations: [
        bounceAnimation(),
    ]
})
export class LoadingContentExampleDialog  {
    

    constructor(public router: Router) {
    }

  



}