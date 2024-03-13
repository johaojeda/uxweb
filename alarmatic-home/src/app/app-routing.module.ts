import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { AnadirInvitadoComponent } from './anadir-invitado/anadir-invitado.component';
import { RutinasComponent } from './rutinas/rutinas.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'anadir-invitado', component: AnadirInvitadoComponent },
  { path: 'rutinas', component: RutinasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
