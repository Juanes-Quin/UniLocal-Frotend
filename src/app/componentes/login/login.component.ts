import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SesionDTO } from "../../dto/cuenta/sesionDTO";
import { TokenService } from '../../servicios/token.service';
import { AuthService } from '../../servicios/auth.service';
import { Alerta } from '../../dto/alerta';
import { AlertaComponent } from "../alerta/alerta.component";




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, AlertaComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  sesionDTO: SesionDTO
  alerta !: Alerta

  constructor(private tokenService: TokenService, private authService: AuthService) {
    this.sesionDTO = new SesionDTO(); // Inicialización aquí
  }

  public ingresar() {

    if(this.sesionDTO.email){
      this.authService.login(this.sesionDTO).subscribe({
        next: data => {
          this.tokenService.login(data.respuesta.token);
        },

        error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
        }
      });
    }
    else{
      this.alerta = {mensaje: "debe ingresar los datos correctos", tipo: "danger"};
      }
  }

  public login() {
    this.authService.loginCliente(this.sesionDTO).subscribe({
    next: data => {
      this.tokenService.login(data.respuesta.token);
    },
    error: error => {
    this.alerta = new Alerta(error.error.respuesta, "danger" );
  }
});
}

}
