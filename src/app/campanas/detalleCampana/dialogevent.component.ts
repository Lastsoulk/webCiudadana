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
//import { DialogContentEvent } from './dialog.component';


export interface DialogData {
    nombreconvocatoria: string;
    descripcion: string;
    fechaconvocatoria: string;
    fotoconvocatoria: string;
    direccion: string;
    ciudadconvocatoria: string;

}

//esto es para cargar la foto
interface HtmlInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

@Component({
    selector: 'dialogevent',
    templateUrl: 'dialogevent.component.html',
    styleUrls: ['./dialogevent.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class DialogEvent {
    //variable para la imagen
    file: File;
    photoSelected: string | ArrayBuffer;
    //url de la imagen a cargar
    urlfile: string;

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
        public dialogRef: MatDialogRef<DialogEvent>,
        private AuthService: AuthService,
        private router: Router,
        private firestoreService: FireBaseService,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    async ngOnInit() {
        //this.setCurrentLocation();
        this.user = await this.AuthService.getCurrentUser();
      
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

            //image preview
            const reader = new FileReader();
            reader.onload = e => this.photoSelected = reader.result;
            reader.readAsDataURL(this.file);

            //cuando selecciona carga la foto y recupera la url
            const filename = Math.floor(Date.now() / 1000);
            var nameImage = 'eventImages/' + filename;
            const pictures = storage().ref(nameImage);
            pictures.put(this.file).then((resp) => {
                var storage = firebase.storage();
                var storageRef = storage.ref();
                storageRef.child(nameImage).getDownloadURL()
                    .then((resp: any) => {
                        console.log("la url foto", resp);
                        this.data.fotoconvocatoria = resp;
                        this.data.direccion = this.address;
                        console.log('Convocatoria creada ', this.data)
                        console.log('String direccion ', this.address)
                        this.urlfile = resp;
                    })
                    .catch((err) => {
                        console.log("error al obtener", "=>", err);
                    })
            })
        }
    }

    crearCategoria(){

        // var lista = this.address
        // var ciudadLista = lista.split(', ')
        // var ciu = ''

        // if(ciudadLista.length>1){
        //     var temp = ciudadLista[1].split(' ')

        //    // var agregar = ''
        //     if(isNaN(temp[temp.length-1])){
        //         ciu = ciudadLista[1]

        //     }else{
        //         ciu = temp.slice(0,-1).join(' ')
    

        //     }
        
        //     console.log('ciudad: '+ciu)
        // }
        
      
        var ciu = this.data.ciudadconvocatoria


        ciu = ciu.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')

    

        let dataEvento = {
            address: this.address,
            campaignId: 'UJymY8ySDSypx5avSivc',
            city : ciu,
            dateCreate : new Date().getTime(),
            dateEvent: this.data.fechaconvocatoria,

            name: this.data.nombreconvocatoria,
            userId: this.user.uid,
            description: this.data.descripcion,
            eventPic: this.data.fotoconvocatoria,
            state: { finished: false, rejected: false, running: false, waiting: true },
            type: 'convocatoria',
            numFollowers: 0,
            env: 'deb'
            
            
            // city : ciu

        }
        


        this.firestoreService.crearEvento(dataEvento);
        console.log(dataEvento)
        let dataCiudad = {
            city: ciu
        }
        this.firestoreService.agregarCiudad(dataCiudad);
        this.dialogRef.close();

        // var datosDireccion = this.data.direccion
        // console.log(this.address)
        // const dialogRef1 = this.dialog.open(DialogContentEvent);



    }




}