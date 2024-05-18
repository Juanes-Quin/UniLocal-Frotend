import { Component } from '@angular/core';
//import { RegistroClienteDTO } from '../../dto/cliente/registroClienteDTO';
import { RegistroClienteDTO } from '../../dto/cliente/registroClienteDTO';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registroClienteDTO: RegistroClienteDTO;
  ciudades: string[];
  archivos!:FileList;

  constructor() {
    this.registroClienteDTO = new RegistroClienteDTO();
    this.ciudades = [];
    this.cargarCiudades();
  }

  /**
   * registrar
   */
  public registrar() {
    if(this.registroClienteDTO.fotoPerfil != "") {
      console.log(this.registroClienteDTO);
    } else {
      console.log("Debe caragar al menos una foto");
    }
  }

  /**
   * sonIguales
 : boolean  */
  public sonIguales(): boolean {
    return this.registroClienteDTO.password == this.registroClienteDTO.confirmaPassword;
  }

  private cargarCiudades() {
    this.ciudades = ["ARMENIA", "PEREIRA", "CALI", "MEDELLIN", "BOGOTA", "BUCARAMANGA", "CARTAGENA"];
  }

  /**
   * onFileChange
   */
  public onFileChange(event: any) {
    if(event.target.files.length > 0) {
      this.archivos = event.target.files;
      this.registroClienteDTO.fotoPerfil = this.archivos[0].name;
    }
  }

}
