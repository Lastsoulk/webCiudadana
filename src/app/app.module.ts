import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
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
// import {AppService} from './app.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PageComponentComponent } from './page-component/page-component.component';




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


 //   RouterModule.forRoot(rutas),
   // HttpClientModule,
  //  MDBBootstrapModule.forRoot(),


    MatSelectModule,
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    //NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatButtonToggleModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  exports: [
    MatToolbarModule,
  ],
  providers: [],//AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
