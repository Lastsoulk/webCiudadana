import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    bounceAnimation,
} from 'angular-animations';
import { NavigationExtras, Router } from '@angular/router';

@Component({
    selector: 'shareMedia-content',
    templateUrl: 'shareMedia.component.html',
    styleUrls: ['shareMedia.component.css'],
    animations: [
        bounceAnimation(),
    ]
})
export class ShareMediaContentExampleDialog  {
    

    constructor(public router: Router) {
    }

    public ruta = this.router.url;
    name = 'ngx sharebuttons';


}