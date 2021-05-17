import { MapsAPILoader, MouseEvent } from "@agm/core";
import { Component, ElementRef, Inject, NgZone, ViewChild, ViewEncapsulation } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ThemePalette } from "@angular/material/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { storage } from 'firebase';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { FireBaseService } from '../../services/fire-base.service';
// import firebase from "firebase/app";
import { AuthService } from '../../services/auth.service';
import { DatePipe } from "@angular/common";
//import { DialogContentEvent } from './dialog.component';


export interface DialogData {
    city: any;
    campaignId: any;
    nombreconvocatoria: string;
    descripcion: string;
    fechaconvocatoria: string;
    fotoconvocatoria: string;
    direccion: string;
    ciudadconvocatoria: string;
    type:string;
    idEvent:any;
    dateEvent:any;
}

//esto es para cargar la foto
interface HtmlInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

@Component({
    selector: 'dialogevent',
    templateUrl: 'dialogevent.component.html',
    styleUrls: ['./dialogevent.component.css'],
    providers: [DatePipe],
    encapsulation: ViewEncapsulation.None,
})
export class DialogEvent {
    //variable para la imagen
    file: File;
    photoSelected: string | ArrayBuffer;


    latitude: number;
    longitude: number;
    zoom: number;
    address: string;
    private geoCoder;
    public user$: Observable<firebase.User> = this.AuthService.afAuth.user;
    public user;

    @ViewChild('search')
    public searchElementRef: ElementRef;

    constructor(
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone,
       // public dialog: MatDialog,
       private datePipe: DatePipe,
        public dialogRef: MatDialogRef<DialogEvent>,
        private AuthService: AuthService,
        private router: Router,
        private firestoreService: FireBaseService,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    async ngOnInit() {
        //this.setCurrentLocation();
        this.user = await this.AuthService.getCurrentUser();
        if(this.data.type=="Convocatoria"){
            this.mapsAPILoader.load().then(() => {
                this.setCurrentLocation();
                this.geoCoder = new google.maps.Geocoder;
    
                let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
                autocomplete.addListener("place_changed", () => {
                    this.ngZone.run(() => {
                        //get the place result
                        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
    
                        //verify result
                        if (place.geometry === undefined || place.geometry === null) {
                            return;
                        }
    
                        //set latitude, longitude and zoom
                        this.latitude = place.geometry.location.lat();
                        this.longitude = place.geometry.location.lng();
                        this.zoom = 12;
                        console.log(place)
                    });
                });
            });
        }
        
    }

    // Get Current Location Coordinates
    private setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 8;
                this.getAddress(this.latitude, this.longitude);
            });
        }
    }


    markerDragEnd($event: MouseEvent) {
        console.log($event);
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
    }

    getAddress(latitude, longitude) {
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
            //console.log(results);
            //console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.address = results[0].formatted_address;
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }

        });
    }

    public formGroup = new FormGroup({
        date: new FormControl(null, [Validators.required]),
        date2: new FormControl(null, [Validators.required])
    })

    

    cancelar(): void {
        this.dialogRef.close();
    }

    onPhotoSelected(event: HtmlInputEvent) {
        if (event.target.files && event.target.files[0]) {
            this.file = <File>event.target.files[0];

            const reader = new FileReader();
            reader.onload = e => this.photoSelected = reader.result;
            reader.readAsDataURL(this.file);
            
        }
    }

    crearEvento(){
        //this.dialogRef = this.dialog.open(LoadingContentExampleDialog);
        const filename = Math.floor(Date.now() / 1000);
        var nameImage = 'eventImages/' + filename;
        const pictures = storage().ref(nameImage);
            pictures.put(this.file).then((resp) => {
                var storage = firebase.storage();
                var storageRef = storage.ref();
                storageRef.child(nameImage).getDownloadURL()
                    .then((resp: any) => {
                        this.data.fotoconvocatoria = resp;
                        let dataEvento;
                        if(this.data.type=="Convocatoria"){
                            this.data.direccion = this.address;
                            dataEvento = {
                                name: this.data.nombreconvocatoria,
                                address: this.address,
                                idCampaign: this.data.campaignId,
                                idUser: this.user.uid,
                                dateModified: this.datePipe.transform(new Date(), 'dd/MM/yyyy, HH:mm'),
                                dateCreate: this.datePipe.transform(new Date(), 'dd/MM/yyyy, HH:mm'),
                                dateEvent: this.datePipe.transform(this.data.fechaconvocatoria, 'dd/MM/yyyy, HH:mm'),
                                denyReason:"",
                                description: this.data.descripcion,
                                eventPic: [this.data.fotoconvocatoria],
                                city : this.data.city,
                                lat : null,
                                long: null,
                                numFollowers: 0,
                                type: 'Convocatoria',
                                state: { finished: false, rejected: false, running: false},
                            }
                        }
                        else if(this.data.type=="Noticia"){
                            dataEvento = {
                                name: this.data.nombreconvocatoria,
                                address: this.data.direccion,
                                idCampaign: this.data.campaignId,
                                idUser: this.user.uid,
                                dateModified: this.datePipe.transform(new Date(), 'dd/MM/yyyy, HH:mm'),
                                dateCreate: this.datePipe.transform(new Date(), 'dd/MM/yyyy, HH:mm'),
                                dateEvent: this.data.dateEvent,
                                denyReason:"",
                                description: this.data.descripcion,
                                eventPic: [this.data.fotoconvocatoria],
                                city : this.data.city,
                                lat : null,
                                long: null,
                                numFollowers: 0,
                                type: 'Noticia',
                                state: { finished: false, rejected: false, running: false},
                                idEvent: this.data.idEvent
                            }
                        }

                        this.firestoreService.crearEvento(dataEvento);
                        console.log(dataEvento)
                
                        this.dialogRef.close();
                
                    })
                    .catch((err) => {
                        console.log("error al obtener", "=>", err);
                    })
            })

        //var ciu = this.data.ciudadconvocatoria


        //ciu = ciu.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')

    

        
        // var datosDireccion = this.data.direccion
        // console.log(this.address)
        // const dialogRef1 = this.dialog.open(DialogContentEvent);



    }




}