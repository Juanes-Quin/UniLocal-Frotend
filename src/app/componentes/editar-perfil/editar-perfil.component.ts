import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActualizarClienteDTO } from '../../dto/cliente/actualizarclienteDTO';
import { CambioPasswordDTO } from '../../dto/cuenta/cambioPasswordDTO';
import { TokenService } from '../../servicios/token.service';
import { ImagenService } from '../../servicios/imagen.service';
import { Alerta } from '../../model/alerta';
import { ClienteService } from '../../servicios/cliente.service';

@Component({
  selector: 'app-editar-perfil',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-perfil.component.html',
  styleUrl: './editar-perfil.component.css'
})
export class EditarPerfilComponent {
  actualizarClienteDTO: ActualizarClienteDTO;
  cambioPasswordDTO: CambioPasswordDTO;

  ciudades: string[];
  archivos!:FileList;
  alerta !: Alerta;


  constructor(private clienteService: ClienteService ,private tokenService: TokenService, private imagenService: ImagenService){
    this.actualizarClienteDTO = new ActualizarClienteDTO();
    this.cambioPasswordDTO = new CambioPasswordDTO();
    this.ciudades = [];
    this.cargarCiudades();
  }

  public editarPerfil() {
    this.clienteService.actualizarCliente(this.actualizarClienteDTO).subscribe({
      next: data => {
        this.alerta = { mensaje: data.respuesta, tipo: "success" };
      },
      error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
      }
    });
  }


  //fata un dto para actualizar la contraseña
  //this.cambioPasswordDTO.passwordNueva == this.actualizarClienteDTO.confirmaPassword;
  public sonIguales(): boolean {
    return this.cambioPasswordDTO.passwordNueva == this.cambioPasswordDTO.passwordNueva;
  }


  private cargarCiudades() {
    this.ciudades = ["ARMENIA", "PEREIRA", "CALI", "MEDELLIN", "BOGOTA", "BUCARAMANGA", "CARTAGENA"];
  }

  

  public cambiarContrasena() {
    this.clienteService.cambiarPassword(this.cambioPasswordDTO).subscribe({
      next: data => {
        this.alerta = { mensaje: data.respuesta, tipo: "success" };
      },
      error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
      }
    });
  }


  public eliminarCuenta (){
    let codigo = this.tokenService.getCodigo();
    this.clienteService.eliminarCliente(codigo).subscribe({
      next: data => {
        this.actualizarClienteDTO.id = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  onlyNumberKey(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  /**
   * onFileChange
   */
  public onFileChange(event: any) {
    if(event.target.files.length > 0) {
      this.archivos = event.target.files;
      this.actualizarClienteDTO.fotoPerfil = this.archivos[0].name;
    }
  }

  public subirImagen() {
    if (this.archivos != null && this.archivos.length > 0) {
      const formData = new FormData();
      formData.append('file', this.archivos[0]);
      this.imagenService.subir(formData).subscribe({
        next: data => {
          this.actualizarClienteDTO.fotoPerfil = data.respuesta.url;
        },
        error: error => {
          this.alerta = { mensaje: error.error, tipo: "danger" };
        }
      });
    } else {
      this.alerta = { mensaje: 'Debe seleccionar una imagen y subirla', tipo: "danger" };
    }
  }

}
