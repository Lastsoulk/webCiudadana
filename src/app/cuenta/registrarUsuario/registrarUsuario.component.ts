import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DialogContentExampleDialog } from 'src/app/campanas/crearCampana/dialog.component';
import { LoadingContentExampleDialog } from 'src/app/loading/loading.component';
import { FireBaseService } from 'src/app/services/fire-base.service';
import { AuthService } from '../../services/auth.service';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'registrar-usuario',
    templateUrl: './registrarUsuario.component.html',
    styleUrls: ['./registrarUsuario.component.css'],
})
export class RegistrarUsuario {
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

    isEmail:boolean =true;
    isPassword:boolean =true;
    isName:boolean =true;
    isNumber:boolean =true;
    isNumberCed:boolean =true;

    userEmails = new FormGroup({
        email: new FormControl('',[
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

      });


    constructor(
        public dialog: MatDialog,
        private authservice: AuthService,
        private firestoreService: FireBaseService,
        private firestore: AngularFirestore,
        private datePipe: DatePipe,
        private storage: AngularFireStorage,
        public router: Router,
    ) {

    }


    onSubmit(form: NgForm): void {
        return;
    }
    validateEmail(search:string):boolean
    {
        let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        this.isEmail = regexp.test(search);

        return this.isEmail;
    }
    validatePassword(input){
        if(input.length<6){
            this.isPassword=false;
        }else{
            this.isPassword=true;
        }
    }
    validateName(input){
        if(input.length==0){
            this.isName=false;
        }else{
            this.isName=true;
        }
    }
    validateNumber(input){
        const s = String(input)
        this.isNumber= !isNaN(+s) && isFinite(+s) && (typeof input === 'number' || !/e/i.test(s)) && input.length==10
        if(input.length==0){
            this.isNumber=true;
        }
    }

    validateNumber2(input){
        const s = String(input)
        this.isNumberCed= !isNaN(+s) && isFinite(+s) && (typeof input === 'number' || !/e/i.test(s)) && input.length==10
        if(input.length==0){
            this.isNumberCed=true;
        }
    }

    onClick(form: NgForm): void {
        this.validateEmail(form.value.email);
        this.validatePassword(form.value.password);
        this.validateName(form.value.fname);
        this.validateNumber(form.value.number);
        this.validateNumber2(form.value.cedula);

        if(!this.isNumber){
            Swal.fire({
                icon: 'error',
                title: 'Opcional',
                text: 'Número de teléfono solo pueden ser números. Campo opcional.',
              })
        }
        if(!this.isNumberCed){
            Swal.fire({
                icon: 'error',
                title: 'Opcional',
                text: 'Cédula solo pueden ser números. Campo opcional.',
              })
        }
        if(!this.isName){
            Swal.fire({
                icon: 'error',
                title: 'Obligatorio',
                text: 'El campo nombre es obligatorio.',
              })
        }
        if(!this.isPassword){
            Swal.fire({
                icon: 'error',
                title: 'Obligatorio',
                text: 'Contraseña debe tener al menos 6 caracteres. Obligatorio',
              })
        }
        if(!this.isEmail){
            Swal.fire({
                icon: 'error',
                title: 'Obligatorio',
                text: 'Email con formato incorrecto. Obligatorio.',
              })
        }
        if(this.isEmail&&this.isName&&this.isPassword && this.isNumber && this.isNumberCed){
            this.dialog.open(LoadingContentExampleDialog);
            let data = {
                email: form.value.email,
                name: form.value.fname,
                telefono : form.value.number,
                cedula:     form.value.cedula,
            }
            console.log(data);
            let user = this.authservice.register(form.value.email,form.value.password,data);
            
            this.delay(2000);
            if(user){     
                this.dialog.closeAll();
            }
             
        }
    }

   

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
}