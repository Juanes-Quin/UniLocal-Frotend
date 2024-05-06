import { NgModel } from '@angular/forms';
import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { FavoritosClienteComponent } from './componentes/favoritos-cliente/favoritos-cliente.component';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'agenda', component: AgendaComponent},
    {path: 'favoritos', component: FavoritosClienteComponent},
    {path: 'editarPerfil', component: EditarPerfilComponent},
    {path: 'reserva', component: ReservaComponent},

    {path: '**', pathMatch: "full", redirectTo: "" }//Se siempre es el ultimo de la lista
];

@NgModule({
  declarations: [

  ],
  imports: [
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
