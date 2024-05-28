import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActualizarClienteDTO } from '../../dto/cliente/actualizarclienteDTO';
import { CambioPasswordDTO } from '../../dto/cuenta/cambioPasswordDTO';
import { TokenService } from '../../servicios/token.service';
import { ImagenService } from '../../servicios/imagen.service';
import { Alerta } from '../../model/alerta';
import { ClienteService } from '../../servicios/cliente.service';
import { PublicoService } from '../../servicios/publico.service';
import { AlertaComponent } from '../alerta/alerta.component';

@Component({
  selector: 'app-editar-perfil',
  standalone: true,
  imports: [FormsModule, CommonModule, AlertaComponent],
  templateUrl: './editar-perfil.component.html',
  styleUrl: './editar-perfil.component.css'
})
export class EditarPerfilComponent {
  actualizarClienteDTO: ActualizarClienteDTO;
  cambioPasswordDTO: CambioPasswordDTO;

  ciudades: string[];
  archivos!:FileList;
  alerta !: Alerta;


  constructor(private clienteService: ClienteService ,private tokenService: TokenService, private publicoService: PublicoService, private imagenService: ImagenService){
    this.actualizarClienteDTO = new ActualizarClienteDTO();
    this.cambioPasswordDTO = new CambioPasswordDTO();
    this.ciudades = [];
    this.cargarCiudades();
  }

  public obtenerCliente(){

    const id = this.tokenService.getCodigo();
    this.clienteService.obtenerCliente(id).subscribe({
      next: data => {
        this.actualizarClienteDTO.email = data.respuesta.email;
        this.actualizarClienteDTO.id = data.respuesta.id;
        this.actualizarClienteDTO.nickname = data.respuesta.nickname;
        this.actualizarClienteDTO.fotoPerfil = data.respuesta.fotoPerfil;
        this.actualizarClienteDTO.nombre = data.respuesta.nombre;
        this.actualizarClienteDTO.ciudadResidencia = data.respuesta.ciudadResidencia;
      } 
    })
  }

  public editarPerfil() {
    
    this.clienteService.actualizarCliente(this.actualizarClienteDTO).subscribe({
      next: data => {
        this.alerta = new Alerta("Datos actualizados correctamente", "success");
      },
      error: error => {
        if (error.status === 400) {
            this.alerta = new Alerta(error.error.mensaje, "danger");
        } else {
          this.alerta = new Alerta("Error al editar el perfil. Por favor, intente nuevamente.", "danger");
        }
      }
    }) 
  }


  public sonIguales(): boolean {
    return this.cambioPasswordDTO.passwordNueva == this.cambioPasswordDTO.passwordNueva;
  }

  private cargarCiudades() {
    this.publicoService.listarCiudades().subscribe({
      next: (data) => {
        this.ciudades = data.respuesta;
        this.obtenerCliente();
      },
      error: (error) => {
        console.log("Error al cargar las ciudades");
      }
    });

  }


  public cambiarContrasena() {

    const token =  this.tokenService.getToken();
    
    if( token!= null ){

      this.cambioPasswordDTO.idCuenta = this.tokenService.getCodigo();
      this.cambioPasswordDTO.token = token;

      this.clienteService.cambiarPassword(this.cambioPasswordDTO).subscribe({
        next: data => {
          this.alerta = { mensaje: data.respuesta, tipo: "success" };
        },
        error: error => {
          console.error('Error al cambiar la contraseña:', error);
          this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
        }
      });

    }

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
