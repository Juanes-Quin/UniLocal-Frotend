import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CambioPasswordDTO } from '../../dto/cuenta/cambioPasswordDTO';

@Component({
  selector: 'app-recuperar-contrasena',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recuperar-contrasena.component.html',
  styleUrl: './recuperar-contrasena.component.css'
})
export class RecuperarContrasenaComponent {

  cambioPasswordDTO: CambioPasswordDTO

  constructor(){
    this.cambioPasswordDTO = new CambioPasswordDTO;
  }

  onlyNumberKey(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

}
