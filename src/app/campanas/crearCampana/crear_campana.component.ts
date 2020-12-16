import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogContentExampleDialog } from './dialog.component';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import firebase from "firebase/app";
import { DatePipe } from '@angular/common';
import { FireBaseService } from '../../services/fire-base.service';
import { ContactComponent } from './components/contact/contact.component';
import { AngularFirestore } from '@angular/fire/firestore';

/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'crear-campana',
    templateUrl: './crear_campana.component.html',
    styleUrls: ['./crear_campana.component.css'],
    providers: [DatePipe]
})
export class CrearCampana {

    public usuario;
    public user$: Observable<firebase.User> = this.AuthService.afAuth.user;
    public user;
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    myDate = new Date();

    constructor(
        public dialog: MatDialog,
        private AuthService: AuthService,
        private firestoreService: FireBaseService,
        private firestore: AngularFirestore,
        private datePipe: DatePipe) {
        // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    }

    message: string;
    correoautority: string;

    receiveMessage($event) {
        this.message = $event.split("/", 2)[0];
        this.correoautority = $event.split("/", 2)[1];
    }

    async ngOnInit() {
        this.user = await this.AuthService.getCurrentUser();
        this.getDatosUser(this.user.uid);
    }

    getDatosUser(userId) {
        this.firestoreService.getDatosUser(userId).subscribe((userSnapshot) => {
            this.usuario = userSnapshot.payload.data();

            //console.log("datos usuario: ", this.usuario);

        }, (error) => {
            console.log(error)
        });

    }

    onSubmit(form: NgForm): void {
        return;
    }


    onClick(form: NgForm): void {
        const json = JSON.stringify(form.value);
        console.log(this.usuario);

        console.log(this.message);              //Nombre de la autoridad
        console.log(this.correoautority);       //Correo de autoridad

        console.log('formulario')
        console.log(form.value)
        console.log(form.value.personal.contact.nameCampaign);
        let data = {
            name: form.value.personal.contact.nameCampaign,
            promoter: { name: this.usuario.name, id: this.user.uid },
            numFollowers: 0,

        }
        console.log(data);
        const dialogRef = this.dialog.open(DialogContentExampleDialog);

    }





    crearCampana(form) {


    }





}
