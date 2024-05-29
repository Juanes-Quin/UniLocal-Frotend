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
import { CambiarContrasenaComponent } from './componentes/cambiar-contrasena/cambiar-contrasena.component';


//imports de negocio
import { GestionNegociosComponent } from './componentes/gestion-negocios/gestion-negocios.component';
import { NegociosComponent } from './componentes/negocios/negocios.component';
import { ActualizarNegocioComponent } from './componentes/actualizar-negocio/actualizar-negocio.component';
import { VerDetalleNegocioComponent } from './componentes/ver-detalle-negocio/ver-detalle-negocio.component';
import { DetalleNegocioComponent } from './componentes/detalle-negocio/detalle-negocio.component';

//imports de la agenda
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { VerDetalleAgendaComponent } from './componentes/ver-detalle-agenda/ver-detalle-agenda.component';
import { RegistroAgendaComponent } from './componentes/registro-agenda/registro-agenda.component';

//imports moderador
import { VistaModeradorComponent } from './componentes/vista-moderador/vista-moderador.component';


//modules
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BusquedaNegocioNombreComponent } from './componentes/busqueda-negocio-nombre/busqueda-negocio-nombre.component';
import {LoginGuard} from "./guards/permiso.service";
import {HistorialRevisionComponent} from "./componentes/historial-revision/historial-revision.component";
import {RolesGuard} from "./guards/roles.service";
import {MisNegociosComponent} from "./componentes/mis-negocios/mis-negocios.component";
import {
  BusquedaNegocioCategoriaComponent
} from "./componentes/busqueda-negocio-categoria/busqueda-negocio-categoria.component";
import {BusquedaNegocioEstadoComponent} from "./componentes/busqueda-negocio-estado/busqueda-negocio-estado.component";

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    {path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
    {path: 'recuperarContrasena', component: RecuperarContrasenaComponent},
    //LOS DEL CLIENTE
    {path: 'agenda', component: AgendaComponent},
    {path: 'verDetalleAgenda/:codigo', component: VerDetalleAgendaComponent},
    {path: 'registroAgenda', component: RegistroAgendaComponent},
    {path: 'favoritos', component: FavoritosClienteComponent},
    {path: 'editarPerfil', component: EditarPerfilComponent, canActivate:[RolesGuard], data: {expectedRole: ["CLIENTE"] }},
    {path: 'cambiarContrasena', component: CambiarContrasenaComponent},
    {path: 'favoritos', component: FavoritosClienteComponent, canActivate: [RolesGuard], data: {expectedRole: ["CLIENTE"] }},
    {path: 'editarPerfil', component: EditarPerfilComponent, canActivate: [RolesGuard], data: {expectedRole: ["CLIENTE"] }},
    //LOS DEL NEGOCIO
    {path: 'reserva', component: ReservaComponent},
    {path: 'gestionNegocios', component: GestionNegociosComponent},
    {path: 'negocios', component: NegociosComponent},
    {path: 'actualizarNegocio/codigo', component: ActualizarNegocioComponent},
    {path: 'detalleNegocio/codigo', component: DetalleNegocioComponent},
    {path: 'misNegocios', component: MisNegociosComponent, canActivate: [RolesGuard], data: {expectedRole: ["CLIENTE"] }},

    //MODERADOR
    {path: 'vistaModerador', component: VistaModeradorComponent},

    //esta comentado mientras se diseña, despues es necesario descomentarlo
    //para que solo los clientes puedan ver sus negocios
    {path: 'misNegocios', component: MisNegociosComponent, canActivate: [RolesGuard], data: {expectedRole: ["CLIENTE"] } },


    


    {path: 'detalleNegocio/:codigo', component: VerDetalleNegocioComponent},

    {path: 'verDetalleNegocio/:codigo', component: VerDetalleNegocioComponent},
    {path: 'busquedaNegocioNombre/:texto', component: BusquedaNegocioNombreComponent},
    {path: 'busquedaNegocioCategoria/:texto', component: BusquedaNegocioCategoriaComponent},
    {path: 'busquedaNegocioEstado/:texto', component: BusquedaNegocioEstadoComponent},


    { path: "historial-revision/:codigo", component: HistorialRevisionComponent, canActivate:
        [RolesGuard], data: { expectedRole: ["MODERADOR"] } },


    {path: '**', pathMatch: "full", redirectTo: "" }//siempre es el ultimo de la lista
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
