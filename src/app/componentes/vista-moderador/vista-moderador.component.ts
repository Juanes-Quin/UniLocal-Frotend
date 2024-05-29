import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RevisionesModeradorDTO } from '../../dto/moderador/RevisionesModeradorDTO';
import { ClienteService } from '../../servicios/cliente.service';
import { AlertaComponent } from '../alerta/alerta.component';
import { Alerta } from '../../model/alerta';
import { AuthService } from '../../servicios/auth.service';
import { TokenService } from '../../servicios/token.service';
import { ModeradorService } from '../../servicios/moderador.service';

@Component({
  selector: 'app-vista-moderador',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, AlertaComponent],
  templateUrl: './vista-moderador.component.html',
  styleUrl: './vista-moderador.component.css'
})
export class VistaModeradorComponent {
  revisionDTO: RevisionesModeradorDTO[];
  alerta!: Alerta;

  constructor(private moderadorService: ModeradorService, private clienteService: ClienteService, private authService: AuthService,private tokenService: TokenService){
    this.revisionDTO = [];
    //this.cargarNegocios();
  }

  /*
  cargarNegocios() {
    // Cargar la lista de negocios pendientes de revisión
    this.moderadorService.aprobarNegocio().subscribe({
      next: (data) => {
        this.alerta = new Alerta(data.respuesta, "success");
      },
      error: (error) => {
        this.alerta = new Alerta("Error al crear el negocio, intente nuevamente.", "danger");
      }
    });
  }
  */

  aprobarNegocio(index: number) {
    const negocio = this.revisionDTO[index];
    this.moderadorService.aprobarNegocio(negocio).subscribe({
      next: (data) => {
        this.alerta = new Alerta(data.respuesta, "success");
        this.revisionDTO.splice(index, 1); // Remover el negocio de la lista
      },
      error: (error) => {
        this.alerta = new Alerta("Error al crear el negocio, intente nuevamente.", "danger");
      }
    });
  }

  rechazarNegocio(index: number) {
    const negocio = this.revisionDTO[index];
    this.moderadorService.rechazarNegocio(negocio).subscribe({
      next: (data) => {
        this.alerta = new Alerta(data.respuesta, "success");
        this.revisionDTO.splice(index, 1); // Remover el negocio de la lista
      },
      error: (error) => {
        this.alerta = new Alerta("Error al crear el negocio, intente nuevamente.", "danger");
      }
    });
  }


}
