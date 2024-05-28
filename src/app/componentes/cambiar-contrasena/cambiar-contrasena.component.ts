import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CambioPasswordDTO } from '../../dto/cuenta/cambioPasswordDTO';
import { TokenService } from '../../servicios/token.service';
import { ImagenService } from '../../servicios/imagen.service';
import { Alerta } from '../../model/alerta';
import { ClienteService } from '../../servicios/cliente.service';
import { AlertaComponent } from '../alerta/alerta.component';

@Component({
  selector: 'app-cambiar-contrasena',
  standalone: true,
  imports: [FormsModule, CommonModule, AlertaComponent],
  templateUrl: './cambiar-contrasena.component.html',
  styleUrl: './cambiar-contrasena.component.css'
})
export class CambiarContrasenaComponent {

  cambioPasswordDTO: CambioPasswordDTO;
  alerta !: Alerta;


  constructor(private clienteService: ClienteService ,private tokenService: TokenService, private imagenService: ImagenService){

    this.cambioPasswordDTO = new CambioPasswordDTO();
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

}
