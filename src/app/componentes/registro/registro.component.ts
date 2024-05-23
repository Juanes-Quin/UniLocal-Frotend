import { Component } from '@angular/core';
import { RegistroClienteDTO } from '../../dto/cliente/registroClienteDTO';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PublicoService } from '../../servicios/publico.service';
import { AuthService } from '../../servicios/auth.service';
import { AlertaComponent } from '../alerta/alerta.component';
import { Alerta } from '../../dto/alerta';
import { ImagenService } from '../../servicios/imagen.service';
import { Route, RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registroClienteDTO: RegistroClienteDTO;
  ciudades: string[];
  archivos!:FileList;
  alerta!:Alerta;

  constructor(private publicoService: PublicoService, private authService: AuthService, private imagenService: ImagenService){
    this.registroClienteDTO = new RegistroClienteDTO();
    this.ciudades = [];
    this.cargarCiudades();
  }

  /**
   * registrar
   */
  public registrar() {
    if (this.registroClienteDTO.fotoPerfil != "") {
    this.authService.registrarCliente(this.registroClienteDTO).subscribe({
    next: (data) => {
    this.alerta = new Alerta(data.respuesta, "success");
    },
    error: (error) => {
    this.alerta = new Alerta(error.error.respuesta, "danger");
    }
    });
    } else {
    this.alerta = new Alerta("Debe subir una imagen", "danger");
    }
    }

  /**
   * sonIguales
 : boolean  */
  public sonIguales(): boolean {
    return this.registroClienteDTO.password == this.registroClienteDTO.confirmaPassword;
  }

  private cargarCiudades() {
    this.publicoService.listarCiudades().subscribe({
    next: (data) => {
    this.ciudades = data.respuesta;
    },
    error: (error) => {
    console.log("Error al cargar las ciudades");
    }
    });
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

  public subirImagen() {
    if (this.archivos != null && this.archivos.length > 0) {
    const formData = new FormData();
    formData.append('file', this.archivos[0]);
    this.imagenService.subir(formData).subscribe({
    next: data => {
    this.registroClienteDTO.fotoPerfil = data.respuesta.url;
    this.alerta = new Alerta("Se ha subido la foto", "success");
    },
    error: error => {
    this.alerta = new Alerta(error.error, "danger");
    }
    });
    } else {
    this.alerta = new Alerta("Debe seleccionar una imagen y subirla", "danger");
    }
    }

}
