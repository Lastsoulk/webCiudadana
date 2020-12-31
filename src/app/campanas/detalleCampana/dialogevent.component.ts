import { MapsAPILoader, MouseEvent } from "@agm/core";
import { Component, ElementRef, Inject, NgZone, ViewChild, ViewEncapsulation } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ThemePalette } from "@angular/material/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { storage } from 'firebase';
import * as firebase from 'firebase/app';

export interface DialogData {
    nombreconvocatoria: string;
    descripcion: string;
    fechaconvocatoria: string;
    fotoconvocatoria: string;
    direccion: string;

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

    @ViewChild('search')
    public searchElementRef: ElementRef;

    ngOnInit() {
        //this.setCurrentLocation();
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
            console.log(results);
            console.log(status);
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

    constructor(
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone,
        public dialogRef: MatDialogRef<DialogEvent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
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
                        console.log(this.data)
                        console.log(this.address)
                        this.urlfile = resp;
                    })
                    .catch((err) => {
                        console.log("error al obtener", "=>", err);
                    })
            })
        }
    }


}