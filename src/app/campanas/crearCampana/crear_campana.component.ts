import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogContentExampleDialog } from './dialog.component';

/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'crear-campana',
    templateUrl: './crear_campana.component.html',
    styleUrls: ['./crear_campana.component.css'],
})
export class CrearCampana {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

    constructor(public dialog: MatDialog) { }

    onSubmit(form: NgForm): void {
        return;
    }

    onClick(form: NgForm): void {
        const json = JSON.stringify(form.value);
        console.log(json);
        const dialogRef = this.dialog.open(DialogContentExampleDialog);

    }


}
