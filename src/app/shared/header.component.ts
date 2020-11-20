import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import firebase from "firebase/app"

/**
 * @title Card with multiple sections
 */

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class Header{
  nameUsuario: string = '';
  isCollapsed = false;
  logeado = false;
  public usuario;
  public user$: Observable<firebase.User> = this.AuthService.afAuth.user;

  constructor(
    private AuthService: AuthService,
    private router: Router,

  ) {
    
   }

  // @HostListener('click')

  async ngOnInit() {
     const user = await this.AuthService.getCurrentUser();
     this.user$.subscribe(res=>{
       this.usuario = res;
     }
     )
     
       
      
   }


   
   async logOut() {
     try {
      this.AuthService.logout();
      localStorage.clear();
      this.router.navigate(['/login']);
      this.logeado = false;
      this.usuario=null;
     } catch (error) {
       console.log(error);
     }
   }


}