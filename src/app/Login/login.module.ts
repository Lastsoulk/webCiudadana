import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {SocialLoginModule,SocialAuthServiceConfig,GoogleLoginProvider} from 'angularx-social-login'
import {Login} from './login.component'

const google:string = "1053659899538-4sht1djf8bvsj2msevsvfq2nhrp7977t.apps.googleusercontent.com"

let config = new AuthServiceConfig([
    {
        id:GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(google)
    }
])

@NgModule({
    declaration: [
        Login
    ],
    imports : [
        BrowserModule,
        SocialLoginModule
    ],
    providers : [{
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'clientId'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ]
      } as SocialAuthServiceConfig,
    }]
})

export class LoginModule{}