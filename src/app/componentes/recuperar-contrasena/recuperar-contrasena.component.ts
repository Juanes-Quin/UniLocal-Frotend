import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CambioPasswordDTO } from '../../dto/cuenta/cambioPasswordDTO';
import { Alerta } from '../../model/alerta';
import { AlertaComponent } from '../alerta/alerta.component';
import { LinkRecuperacionDTO } from '../../dto/cuenta/link-recuperacion-dto';
import { PublicoService } from '../../servicios/publico.service';

@Component({
  selector: 'app-recuperar-contrasena',
  standalone: true,
  imports: [FormsModule, CommonModule, AlertaComponent],
  templateUrl: './recuperar-contrasena.component.html',
  styleUrl: './recuperar-contrasena.component.css'
})
export class RecuperarContrasenaComponent {

  cambioPasswordDTO: CambioPasswordDTO
  alerta !: Alerta|null;

  constructor(private publicoService:PublicoService){
    this.cambioPasswordDTO = new CambioPasswordDTO;
  }



  public recuperarContrasena() {
    if (this.cambioPasswordDTO.email) {
      const linkRecuperacionDTO: LinkRecuperacionDTO = { email: this.cambioPasswordDTO.email, idCuenta: '' };
      
      this.publicoService.enviarLinkRecuperacion(linkRecuperacionDTO).subscribe({
        next: data => {
          this.alerta = { mensaje: "Se envió un link de recuperación a su cuenta", tipo: "success" };
          this.cambioPasswordDTO.email = '';
          this.cambioPasswordDTO.passwordNueva = '';
        },
        error: error => {
          this.alerta = { mensaje: "Error al enviar el link de recuperación. Por favor, verifique su correo electrónico.", tipo: "danger" };
        }
      });
    } else {
      this.alerta = { mensaje: "Debe ingresar un correo electrónico válido", tipo: "danger" };
    }
  }

  onlyNumberKey(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

}
