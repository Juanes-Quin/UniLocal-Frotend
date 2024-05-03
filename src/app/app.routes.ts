import { NgModel } from '@angular/forms';
import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},

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
