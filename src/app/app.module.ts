import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from '@angular/material/tabs'
import { TabGroupAlignExample } from './tab/tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardFancyExample } from './home/home.component';

//import {EventDetailComponent} from './event-detail/event-detail.component';
import { Header } from './shared/header.component';


import { Perfil } from './perfil/perfil.component';
import { Nosotros } from './nosotros/nosotros.component';
import { DetalleCampana } from './campanas/detalleCampana/detalleCampana.component';
import { CrearCampana } from './campanas/crearCampana/crear_campana.component';
import { ChatComponent } from './chat/chat.component';
import { Campana } from './campanas/campanas/campanas.component';
import { misCampanas } from './campanas/misCampanas/misCampanas.component';
import { Login } from './Login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { PageComponentComponent } from './page-component/page-component.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';
import { Eventos } from './eventos/eventos/evento.component';
import { misEventos } from './eventos/misEventos/misEventos.component';
import { DetalleEvento } from './eventos/detalleEvento/detalleEvento.component';
import { RegistrarUsuario } from './cuenta/registrarUsuario/registrarUsuario.component';
// import { firestore } from 'firebase';

import { ContactComponent } from './campanas/crearCampana/components/contact/contact.component';
import { AddressComponent } from './campanas/crearCampana/components/address/address.component';
import { SymptomComponent } from './campanas/crearCampana/components/symptom/symptom.component';


import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
//import { ContactComponent } from './campanas/crearCampana/components/contact/contact.component';

import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogContentExampleDialog } from './campanas/crearCampana/dialog.component';
import { AngularImgComponent } from './campanas/crearCampana/components/successicon/success-icon.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { eventosComponent } from './eventos/eventos.component';
import { DialogEvent } from './campanas/detalleCampana/dialogevent.component';
import { DpDatePickerModule } from 'ng2-date-picker';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule, } from '@angular-material-components/datetime-picker';
import { AgmCoreModule } from '@agm/core';
import { noticiasComponent } from './noticias/noticias.component';
import { Noticias } from './noticias/noticia/noticia.component';
import { DetalleNoticia } from './noticias/detalleNoticia/detalleNoticia.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    DialogEvent,
    eventosComponent,
    AngularImgComponent,
    AppComponent,
    TabGroupAlignExample,
    CardFancyExample,
    Perfil,
    Header,
    DetalleCampana,
    CrearCampana,
    Login,
    Campana,
    PageComponentComponent,
    ChatComponent,
    misCampanas,
    Nosotros,
    DetalleEvento,
    RegistrarUsuario,
    misEventos,
    // EventDetailComponent
    SymptomComponent,
    AddressComponent,
    ContactComponent,
    DialogContentExampleDialog,
    Eventos,
    ChatComponent,
    noticiasComponent,
    Noticias,
    DetalleNoticia,
    FooterComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCcHRv7BzD-FqF28jgT2RJmEu5mfZmmXNs',
      libraries: ['places']
    }),
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    DpDatePickerModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatMomentDateModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatStepperModule,
    AngularFireModule.initializeApp(environment),
    HttpClientModule,
    AngularFireAuthModule,
    MatSelectModule,
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
    ReactiveFormsModule,
    //
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    MatFormFieldModule
  ],
  exports: [
    MatToolbarModule,
  ],
  providers: [MatNativeDateModule],//AppService],

  bootstrap: [AppComponent]
})
export class AppModule { }
