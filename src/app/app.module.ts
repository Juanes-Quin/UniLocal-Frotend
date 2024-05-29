import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CrearNegocioComponent } from './componentes/crear-negocio/crear-negocio.component';

@NgModule({
  declarations: [
    CrearNegocioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
