import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import firebase from "firebase/app";
import { FireBaseService, ICampaña } from '../services/fire-base.service';

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


  constructor(
    private AuthService: AuthService,
    private firestoreService: FireBaseService,

  ) {

  }

  async ngOnInit() {
    const user = await this.AuthService.getCurrentUser();
    this.getDatosUser(user.uid);
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

}