import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActualizarNegocioDTO } from '../../dto/negocio/ActualizarNegocioDTO';
import { TokenService } from '../../servicios/token.service';
import { AuthService } from '../../servicios/auth.service';
import { ImagenService } from '../../servicios/imagen.service';
import { ModeradorService } from '../../servicios/moderador.service';
import { ClienteService } from '../../servicios/cliente.service';
import { Alerta } from '../../model/alerta';

@Component({
  selector: 'app-actualizar-negocio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './actualizar-negocio.component.html',
  styleUrl: './actualizar-negocio.component.css'
})
export class ActualizarNegocioComponent {

  actualizarDTO: ActualizarNegocioDTO;
  archivos!:FileList;
  alerta !: Alerta;

  constructor( private clienteService: ClienteService ,private moderadorService: ModeradorService ,
                private tokenService: TokenService, private authService: AuthService ,private imagenService: ImagenService){

    this.actualizarDTO = new ActualizarNegocioDTO(
      'id_value',
      'nombre_value',
      'descripcion_value',
      [],
      [],
      'categoriaNegocio_value'
    );


  }

  /*
  public editarPerfil() {
    this.clienteService.actualizarNegocio(this.actualizarDTO).subscribe({
      next: data => {
        this.alerta = { mensaje: data.respuesta, tipo: "success" };
      },
      error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
      }
    });
  }

  public eliminarNegocio (){
    let codigo = this.tokenService.getCodigo();
    this.clienteService.eliminarNegocio(codigo).subscribe({
      next: data => {
        this.actualizarDTO.id = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  */


  /**
   * onFileChange
   */
  public onFileChange(event: any) {
    if(event.target.files.length > 0) {
      this.archivos = event.target.files;
      this.actualizarDTO.urlFoto = this.archivos[0].name;
    }
  }

  public subirImagen() {
    if (this.archivos != null && this.archivos.length > 0) {
      const formData = new FormData();
      formData.append('file', this.archivos[0]);
      this.imagenService.subir(formData).subscribe({
        next: data => {
          this.actualizarDTO.urlFoto = data.respuesta.url;
        },
        error: error => {
          this.alerta = { mensaje: error.error, tipo: "danger" };
        }
      });
    } else {
      this.alerta = { mensaje: 'Debe seleccionar una imagen y subirla', tipo: "danger" };
    }
  }
  /** 
  onSubmit(formulario: Ngform){
    if(){
      console.log('Formulario enviado',this.actualizarDTO);

    }
    else{
    this.alerta = {mensaje: 'Porfavor, completa todos los campos requeridos ',tipo:'danger'};
  }
}
*/
}
