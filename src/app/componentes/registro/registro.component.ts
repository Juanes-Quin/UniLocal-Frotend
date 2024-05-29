import { Component } from '@angular/core';
import { RegistroClienteDTO } from '../../dto/cliente/registroClienteDTO';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PublicoService } from '../../servicios/publico.service';
import { AuthService } from '../../servicios/auth.service';
import { Alerta } from '../../model/alerta';
import { ImagenService } from '../../servicios/imagen.service';
import { Route, RouterModule } from '@angular/router';
import {ClienteService} from "../../servicios/cliente.service";
import { AlertaComponent } from '../alerta/alerta.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, AlertaComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  registroClienteDTO: RegistroClienteDTO;

  ciudades: string[];
  categorias: string[];
  archivos!: FileList;
  alerta!: Alerta;

  constructor(
    private publicoService: PublicoService,
    private clienteService: ClienteService,
    private authService: AuthService,
    private imagenService: ImagenService
  ) {
    this.registroClienteDTO = new RegistroClienteDTO();
    this.ciudades = [];
    this.cargarCiudades();

    this.categorias = [];
    this.cargarCategorias();

  }


  /**
   * registrar
   */
  public registrar() {
    if (this.registroClienteDTO.fotoPerfil === "") {
      this.alerta = new Alerta("Debe subir una imagen", "danger");
      return;
    }

    this.authService.registrarCliente(this.registroClienteDTO).subscribe({
      next: (data) => {
        this.alerta = new Alerta(data.respuesta, "success");
      },
      error: (error) => {
        if (error.status === 400) {
          const errorMessage = error.error.mensaje;
          if (errorMessage.includes("El correo ya se encuentra registrado")) {
            this.alerta = new Alerta("El correo ya se encuentra registrado. Por favor, ingrese un nuevo correo.", "danger");
          } else if (errorMessage.includes("El nickname ya se encuentra registrado por otro usuario")) {
            this.alerta = new Alerta("El nickname ya se encuentra registrado por otro usuario. Por favor, elija un nickname diferente.", "danger");
          } else {
            this.alerta = new Alerta(error.error.respuesta, "danger");
          }
        } else {
          this.alerta = new Alerta("Error al registrar el cliente. Por favor, intente nuevamente.", "danger");
        }
      }
    });
  }

  /**
   * sonIguales : boolean
   */
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

    this.clienteService.listarCiudades().subscribe({
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
    if (event.target.files.length > 0) {
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

  private cargarCategorias() {
    this.publicoService.listarCategoriaNegocio().subscribe({
      next: (data) => {
        this.categorias = data.respuesta;
      },
      error: (error) => {
        console.log("Error al cargar las categorias");
      }
    });

    this.clienteService.listarCategoriaNegocio().subscribe({
      next: (data) => {
        this.categorias = data.respuesta;
      },
      error: (error) => {
        console.log("Error al cargar las categorias");
      }
    });

    }


}
