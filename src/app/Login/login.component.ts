import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { NavigationExtras, Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

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
    public userRole;
    constructor(
        private router: Router,
        private AuthService: AuthService
    ) { }

//     async ngOnInit() {
//      const user = await this.AuthService.getCurrentUser();
//      if (user) {
//         this.logeado = true;
//        console.log('user->', user);
//       }
//    }


    matcher = new MyErrorStateMatcher();
    loginForm = new FormGroup({
        email: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])),
        password: new FormControl('', Validators.required)
    });

/* onFormSubmit(form: any) {
  const login = form;
  this.ref.orderByChild('nickname').equalTo(login.nickname).once('value', snapshot => {
    if (snapshot.exists()) {
      localStorage.setItem('nickname', login.nickname);
      this.router.navigate(['/roomlist']);
    } else {
      const newUser = firebase.database().ref('users/').push();
      newUser.set(login);
      localStorage.setItem('nickname', login.nickname);
      this.router.navigate(['/roomlist']);
    }
  });
} */

async loginGoogle(){
    this.AuthService.loginGoogle();
}

async loginFacebook(){
    this.AuthService.loginFacebook();
    }

async onLogin() {
    const { email, password } = this.loginForm.value;

    try {
        const user = await this.AuthService.login(email, password);
      //  localStorage.setItem('usuarioLogeado',user);

    
    } catch (error) {
        console.log(error);
    }
} 

cambiarPestana(pestana) {
        //     let campaignId = value.campaignId;
        //   //  let campaignUpdateId = value.campaignUpdateId;
        //     let data = {'camp':campaignId}//'upd':campaignUpdateId}
        let navigationExtras: NavigationExtras = {
            queryParams: {
                pestana: pestana,
                //   "upd" : JSON.stringify(campaignUpdateId)
            }
        };
        this.router.navigate([pestana], navigationExtras);
    }
  

}