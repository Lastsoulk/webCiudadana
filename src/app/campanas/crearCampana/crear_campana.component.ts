import { AfterViewInit, Component, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogContentExampleDialog } from './dialog.component';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import firebase from "firebase/app";
import { DatePipe } from '@angular/common';
import { FireBaseService } from '../../services/fire-base.service';
import { ContactComponent } from './components/contact/contact.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FileService } from '../../services/file.service';
import { ImageService } from '../../services/image.service';
import { Router } from '@angular/router';
import { LoadingContentExampleDialog } from 'src/app/loading/loading.component';

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
    public imagen: any;
    public urlImagen: any = '';
    id: string;

    dialogRef;

    n = Date.now();
    filePath = `campaignImages/${this.n}`;
    fileRef;
    file;
    
    selectedFile: File = null;
    fb;
    downloadURL: Observable<string>;

    constructor(
        public dialog: MatDialog,
        private AuthService: AuthService,
        private firestoreService: FireBaseService,
        private firestore: AngularFirestore,
        private datePipe: DatePipe,
        private storage: AngularFireStorage,
        public router: Router,
    ) {


    }

    message: string;
    //correoautority: string;
    categoria: string;
    ciudad: string;
    zona: string;
    zoneName: string;

    receiveMessage($event) {
        console.log('Aqui estamos');
        console.log($event);
        
        this.message = $event.split("/", 1)[0];
        //this.correoautority = $event.split("/", 2)[1];
        this.categoria = $event.split("/", 2)[1];
        this.zona = $event.split("/", 3)[2];
        this.ciudad = $event.split("/", 4)[3];
        
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

    seleccionadorImagen(event: any) {
        
        this.file = event.target.files[0];
        
        this.fileRef = this.storage.ref(this.filePath);
        

    }


    onClick(form: NgForm): void {
        
        this.dialogRef = this.dialog.open(LoadingContentExampleDialog);
        const json = JSON.stringify(form.value);
        const task = this.storage.upload(`campaignImages/${this.n}`, this.file);
        task
        .snapshotChanges()
        .pipe(
            finalize(() => {
            this.downloadURL = this.fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
                if (url) {
                this.fb = url;
                }
                console.log(this.fb);
                let data = {
                    name: form.value.personal.contact.nameCampaign,
                    numFollowers: 1,
                    promoter: this.user.uid ,
                    state: { finished: false, rejected: false, running: false },
                    campaignPic: [this.fb],
                    dateEnd: this.datePipe.transform(form.value.personal.contact.fechafin, 'dd/MM/yyyy, HH:mm'),
                    dateStart: this.datePipe.transform(form.value.personal.contact.fechainicio, 'dd/MM/yyyy, HH:mm'),
                    dateModified: this.datePipe.transform(this.myDate, 'dd/MM/yyyy, HH:mm'),
                    dateCreate: this.datePipe.transform(this.myDate, 'dd/MM/yyyy, HH:mm'),
                    categories:[this.categoria],
                    description: form.value.health.symptoms.descriptionCampaign,
                    city:this.ciudad,
                    questionAffect: form.value.health.symptoms.questionAffect,//a quien afecta
                    questionAsking: form.value.health.symptoms.questionAsking,//esta pidiendo
                    questionProblem: form.value.health.symptoms.descriptionCampaign,//cual es el problema
                    authority: this.message,
                    province: this.zona,
        
                }
                this.firestoreService.crearCampaña(data);
                this.dialog.closeAll();
                console.log(data);
                
                this.dialogRef = this.dialog.open(DialogContentExampleDialog);
                
            });
            })
        )
        .subscribe(url => {
            if (url) {
                this.urlImagen=url;
                console.log(url);
                
            }
        });
        
        
        
        
        
    }



}
