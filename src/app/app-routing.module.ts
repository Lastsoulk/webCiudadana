import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Perfil } from './perfil/perfil.component';
import { DetalleCampana } from './campanas/detalleCampana/detalleCampana.component';
import { CrearCampana } from './campanas/crearCampana/crear_campana.component';
import { Campana } from './campanas/campanas/campanas.component';
import { Login } from './Login/login.component';
import { CardFancyExample } from './home/home.component';



const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full'  },
     { path: 'home', component: CardFancyExample },
    { path: 'campanas', component: Campana },

  { path: 'perfil', component: Perfil },
  { path: 'crearCampana', component: CrearCampana },
  { path: 'detalleCampana', component: DetalleCampana },
  {path: 'login',component: Login},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
