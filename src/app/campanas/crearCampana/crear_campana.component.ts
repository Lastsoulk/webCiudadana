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
    public urlImagen: any = 'hola';
    id: string;

    constructor(
        public dialog: MatDialog,
        private AuthService: AuthService,
        private firestoreService: FireBaseService,
        private firestore: AngularFirestore,
        private datePipe: DatePipe,
    ) {

        // private imageService: ImageService,
        //@Inject(AngularFireStorage) private storage: AngularFireStorage,
        //@Inject(FileService) private fileService: FileService) {
        // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    }

    message: string;
    correoautority: string;
    categoria: string;

    receiveMessage($event) {
        console.log('Aqui estamos');
        console.log($event);
        this.message = $event.split("/", 2)[0];
        this.correoautority = $event.split("/", 2)[1];
        this.categoria = $event.split("/", 3)[2];
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

        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.readAsDataURL(event.target.files[0]); // read file as data url

            reader.onload = (event) => { // called once readAsDataURL is completed
                this.urlImagen = event.target.result;
                console.log('llego aca')
            }
            console.log(this.urlImagen);
        }



        // if (event.target.files && event.target.files[0]) {
        // var reader = new FileReader();
        // console.log('holaaa')
        // reader.readAsDataURL(event.target.files[0]); // read file as data url

        // reader.onload = (event) => { // called once readAsDataURL is completed
        //     this.urlImagen = event.target.result;
        // }
        // console.log(this.urlImagen)
        // console.log(event.target.result)
        // }

        // const file: File = event.target.files[0];
        // const reader = new FileReader();

        // reader.addEventListener('load', (event: any) => {

        // this.imagen = new ImageSnippet(event.target.result, file);

        // this.imageService.uploadImage(this.imagen.file).subscribe(
        //     (res) => {
        //         // console.log('bien'),
        //         // console.log(res)
        //     },
        //     (err) => {

        //     })
        // });

        // reader.readAsDataURL(file);
    }
    // this.imagen = event.target.files[0];
    // console.log('aca imagen')
    // console.log(event.target.files[0]);
    // this.cargarImagen();







    cargarImagen() {

        //  var nameImagen = this.imagen.name;
        // console.log(this.imagen)
        // const fileRef = this.storage.ref(nameImagen);
        // console.log('url')
        // this.storage.upload(this.id, this.imagen).snapshotChanges().pipe(
        //     finalize(() => {
        //     fileRef.getDownloadURL().subscribe((url) => {
        //         console.log('ola url');
        //         console.log(url)
        //     this.urlImagen = url;
        //    // this.firestoreService.insertImageDetails(this.id,this.url);
        //     alert('Upload Successful');
        //     })
        //     })
        //     ).subscribe();
        // console.log(this.urlImagen)

    }

    // save() {    var name = this.selectedImage.name;
    // const fileRef = this.storage.ref(name);    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
    //   finalize(() => {
    //     fileRef.getDownloadURL().subscribe((url) => {
    //       this.url = url;
    //       this.fileService.insertImageDetails(this.id,this.url);
    //       alert('Upload Successful');
    //     })
    //   })
    // ).subscribe();


    //     this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
    // finalize(() => {
    // fileRef.getDownloadURL().subscribe((url) => {
    // this.url = url;
    // this.fileService.insertImageDetails(this.id,this.url);
    // alert('Upload Successful');
    // })
    // })
    // ).subscribe();

    onClick(form: NgForm): void {




        const json = JSON.stringify(form.value);
        // console.log(this.usuario);

        // console.log(this.message);              //Nombre de la autoridad
        // console.log(this.correoautority);       //Correo de autoridad

        // console.log('formulario')
        // console.log(form.value)
        //console.log(form.value.personal.contact.fechainicio);

        let data = {
            name: form.value.personal.contact.nameCampaign,
            promoter: { name: this.usuario.name, id: this.user.uid },
            numFollowers: 0,
            state: { finished: false, rejected: false, running: false, waiting: true },
            description: form.value.health.symptoms.descriptionCampaign,
            authority: { email: this.correoautority, name: this.message },
            campaignPic: this.urlImagen,
            categoria: this.categoria,
            dateStart: form.value.personal.contact.fechainicio,
            dateEnd: form.value.personal.contact.fechafin,

        }
        


        
        const dialogRef = this.dialog.open(DialogContentExampleDialog);

        this.firestoreService.crearCampaña(data);
        
        // crearCampaña(campaigns:any[])

    }





    crearCampana(form) {


    }





}
