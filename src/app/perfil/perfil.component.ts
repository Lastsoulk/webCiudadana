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

  constructor(
    private AuthService: AuthService,
    private firestoreService: FireBaseService,
    private router: Router,
  ) {

  }

  Form = new FormGroup({
    
  });


  async ngOnInit() {
    this.user = await this.AuthService.getCurrentUser();
    this.getDatosUser(this.user.uid);
   // console.log(user.displayName);

  }


  getDatosUser(userId){
      this.firestoreService.getDatosUser(userId).subscribe((userSnapshot) => {
        this.datosUsuario = userSnapshot.payload.data();

        console.log("datos usuario: ", this.datosUsuario);

        }, (error) => {
          console.log(error)
        });

  }
  changeEditMode(){
    this.editMode=!this.editMode;
  }

  async changeData(event: any) {
    let fname = event.target.fname.value;
    let cedula = event.target.cedula.value;
    let telefono = event.target.telefono.value;
    try {
        this.firestoreService.updateDatosUser(this.user.uid,fname,cedula,telefono);
        //this.router.navigate(['/perfil']);
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
} 

}