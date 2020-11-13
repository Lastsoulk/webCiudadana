import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Router } from '@angular/router';
/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class Login {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    user: any;
    constructor(
        private fireAuth: AngularFireAuth,
        private router: Router
    ) { }

    async loginGoogle() {
        const res = await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        const email = res.user.email;
        this.router.navigate(["/home"])
    }

}