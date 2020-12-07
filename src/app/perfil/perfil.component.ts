import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import firebase from "firebase/app"

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

  constructor(
    private AuthService: AuthService,

  ) {

  }

  async ngOnInit() {
    const user = await this.AuthService.getCurrentUser();
    console.log(user.displayName);

  }
}