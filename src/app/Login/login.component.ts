import { Component } from '@angular/core';
import {SocialAuthServiceConfig,SocialAuthService,GoogleLoginProvider} from 'angularx-social-login';
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
    user:any;
    constructor(
        private socialServ: SocialAuthService
    ){}

    signIn(platform:string):void{
        platform = GoogleLoginProvider.PROVIDER_ID;
        this.socialServ.signIn(platform).then((res)=>{
            console.log(platform + 'logged is: ',res);

            this.user = res;
        });
    }

}