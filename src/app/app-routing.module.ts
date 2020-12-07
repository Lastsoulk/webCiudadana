import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Perfil } from './perfil/perfil.component';
import { Eventos } from './eventos/eventos/evento.component';
import { DetalleEvento } from './eventos/detalleEvento/detalleEvento.component';
import { Nosotros } from './nosotros/nosotros.component';
import { DetalleCampana } from './campanas/detalleCampana/detalleCampana.component';
import { CrearCampana } from './campanas/crearCampana/crear_campana.component';
import { Campana } from './campanas/campanas/campanas.component';
import { misCampanas } from './campanas/misCampanas/misCampanas.component';
import { Login } from './Login/login.component';
import { CardFancyExample } from './home/home.component';
import { RegistrarUsuario } from './cuenta/registrarUsuario/registrarUsuario.component';
import { eventosComponent } from './eventos/eventos.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CardFancyExample },
  { path: 'campanas', component: Campana },
  { path: 'perfil', component: Perfil },
  { path: 'crearCampana', component: CrearCampana },
  { path: 'detalleCampana', component: DetalleCampana },
  { path: 'detalleEvento', component: DetalleEvento },
  { path: 'login', component: Login },
  { path: 'misCampanas', component: misCampanas },
  { path: 'nosotros', component: Nosotros },
  { path: 'eventos', component: Eventos },
  { path: 'registrarUsuario', component: RegistrarUsuario },
  { path: 'eventos', component: eventosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
