import { Component } from '@angular/core';

import { RegistroNegocioDTO } from '../../dto/negocio/RegistroNegocioDTO';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-negocio',
  standalone: true,

  imports: [FormsModule, CommonModule],
  templateUrl: './crear-negocio.component.html',
  styleUrl: './crear-negocio.component.css'
})
export class CrearNegocioComponent {

  registroNegocioDTO: RegistroNegocioDTO;

  constructor(){
    this.registroNegocioDTO = new RegistroNegocioDTO(); // Crear una instancia de RegistroNegocioDTO
  }

  public registrarNegocio() {
    console.log(this.registroNegocioDTO);
  }
}



