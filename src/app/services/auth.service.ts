import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { rejects } from 'assert';
//import { User } from 'firebase';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import firebase from 'firebase';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any;

  constructor(
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,

  ) { }

  async login(email: string, password: string) {
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(email, password);
      if (res.user) {
        localStorage.setItem('currentUser', JSON.stringify(res.user));
        this.router.navigate(["/home"])
      } else {
        localStorage.setItem('currentUser', null);
      }
    }
    catch (error) {
      console.log(error);
      Swal.fire("Error", error.message, "error")

    }

  }

  async loginGoogle() {
    const res = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    
    if (res.user) {
      localStorage.setItem('currentUser', JSON.stringify(res.user));
      this.router.navigate(["/home"])
    } else {
      localStorage.setItem('currentUser', null);
    }
    
  }

  async loginFacebook() {
    const res = await this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    const email = res.user.email;
  }

  async register(email: string, password: string, payloadObject: any) {
      this.afAuth.createUserWithEmailAndPassword(email, password).then(
        (user) => {
          if (user) {
            this.updateUserData(user, payloadObject)
            Swal.fire("Registro exitoso","Se ha guardado correctamente el registro","success")
            this.router.navigate(['/home']);
  
          }
        }).catch(
          (err) => {
            
            if(err.code=="auth/email-already-in-use"){
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al crear el usuario... el correo ya esta registrado',
              })
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error',
              })
            }
            console.log(err);
          })
    }
  
  async updateUserData(userCredential: firebase.auth.UserCredential, payloadObject: any) {
      if(userCredential.user.uid){
        this.delay(2000);
        const user = await this.firestore.collection('users').doc(userCredential.user.uid).snapshotChanges().subscribe(
           (resp:any)=>{
             this.firestore.doc(`users/${userCredential.user.uid}`).update(payloadObject);

           }, (error) => {
           console.log(error)
           }
           )

       }

   }

  async logout() {
    try {
      //AppComponent.estoyLogeado=false;
      localStorage.setItem('currentUser', null);
      await this.afAuth.signOut();
    }
    catch (error) {
      console.log(error)
    }
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();

  }

  public getUsers() {
    return this.firestore.collection("users").snapshotChanges();
  }
  


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
