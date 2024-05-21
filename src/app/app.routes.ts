import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

//imports del cliente
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FavoritosClienteComponent } from './componentes/favoritos-cliente/favoritos-cliente.component';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { RecuperarContrasenaComponent } from './componentes/recuperar-contrasena/recuperar-contrasena.component';

//imports de negocio
import { NegociosComponent } from './componentes/negocios/negocios.component';
import { ActualizarNegocioComponent } from './componentes/actualizar-negocio/actualizar-negocio.component';

//imports de la agenda
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { VerDetalleAgendaComponent } from './componentes/ver-detalle-agenda/ver-detalle-agenda.component';
import { RegistroAgendaComponent } from './componentes/registro-agenda/registro-agenda.component';



//modules
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AlertaComponent } from './alerta/alerta.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'recuperarContrasena', component: RecuperarContrasenaComponent},
    {path: 'agenda', component: AgendaComponent},
    {path: 'verDetalleAgenda', component: VerDetalleAgendaComponent},
    {path: 'registroAgenda', component: RegistroAgendaComponent},
    {path: 'favoritos', component: FavoritosClienteComponent},
    {path: 'editarPerfil', component: EditarPerfilComponent},
    {path: 'reserva', component: ReservaComponent},
    {path: 'negocios', component: NegociosComponent},
    {path: 'actualizarNegocio', component: ActualizarNegocioComponent},

    {path: '**', pathMatch: "full", redirectTo: "" }//Se siempre es el ultimo de la lista
];

@NgModule({
  declarations: [
    //PORQUE NO ME DEJA
    //AlertaComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
