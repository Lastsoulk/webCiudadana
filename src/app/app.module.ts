import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from '@angular/material/tabs'
import { TabGroupAlignExample } from './tab/tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardFancyExample } from './home/home.component';


import {Header} from './shared/header.component';
import { Perfil } from './perfil/perfil.component';
import { DetalleCampana } from './campanas/detalleCampana/detalleCampana.component';
import { CrearCampana } from './campanas/crearCampana/crear_campana.component';
import { Campana } from './campanas/campanas/campanas.component';
import { Login } from './Login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PageComponentComponent } from './page-component/page-component.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';



@NgModule({
  declarations: [
    AppComponent,
    TabGroupAlignExample,
    CardFancyExample,
    Perfil,
    Header,
    DetalleCampana,
    CrearCampana,
    Login,
    Campana,
    PageComponentComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatButtonToggleModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatToolbarModule,
  ],
  providers: [],//AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
