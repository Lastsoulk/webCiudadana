import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import firebase from "firebase/app";
import { FireBaseService, ICampaña } from '../services/fire-base.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * @title Card with multiple sections
 */

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class Perfil {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public user$: Observable<firebase.User> = this.AuthService.afAuth.user;
  public datosUsuario;
  
  public user;
  public editMode:boolean =false;

  fname = '';
  cedula = '';
  telefono = '';

  constructor(
    private AuthService: AuthService,
    private firestoreService: FireBaseService,
    private router: Router,
  ) {

  }

  Form = new FormGroup({
    fname: new FormControl(this.fname, [Validators.required, Validators.minLength(5)]),
    cedula: new FormControl(this.cedula, [Validators.required, Validators.minLength(5)]),
    telefono: new FormControl(this.fname, [Validators.required, Validators.minLength(5)]),
  });


  async ngOnInit() {
    this.user = await this.AuthService.getCurrentUser();
    this.getDatosUser(this.user.uid);
   // console.log(user.displayName);

  }


  getDatosUser(userId){
      this.firestoreService.getDatosUser(userId).subscribe((userSnapshot) => {
        this.datosUsuario = userSnapshot.payload.data();
        this.fname= this.datosUsuario.name;
        this.cedula=this.datosUsuario.cedula;
        this.telefono= this.datosUsuario.telefono;
        console.log("datos usuario: ", this.datosUsuario);
        console.log(this.fname);

        }, (error) => {
          console.log(error)
        });

  }
  changeEditMode(){
    this.editMode=!this.editMode;
  }

  async changeData(event: any) {
    this.fname = event.target.fname.value;
    this.cedula = event.target.cedula.value;
    this.telefono = event.target.telefono.value;
    try {
        let datos = {
          nombre:this.fname,
          cedula:this.cedula,
          telefono:this.telefono
        }
        console.log(datos);
        this.firestoreService.updateDatosUser(this.user.uid,datos);
    } catch (error) {
        console.log(error);
    }
} 

}