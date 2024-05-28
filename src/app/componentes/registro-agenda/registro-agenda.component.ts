import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClienteService } from '../../servicios/cliente.service';
import { TokenService } from '../../servicios/token.service';
import { AuthService } from '../../servicios/auth.service';
import { RegistroAgendaDTO } from '../../dto/agenda/registro-agenda-dto';

@Component({
  selector: 'app-registro-agenda',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './registro-agenda.component.html',
  styleUrls: ['./registro-agenda.component.css']
})
export class RegistroAgendaComponent {
  registroAgendaDTO: RegistroAgendaDTO;

  constructor(private clienteService: ClienteService, private tokenService: TokenService, private authService: AuthService) {
    this.registroAgendaDTO = new RegistroAgendaDTO();
  }

  registrarAgenda() {
    const codigoNegocio = this.tokenService.getCodigo();
    this.clienteService.registrarAgenda(this.registroAgendaDTO).subscribe({
      next: data => {
        this.registroAgendaDTO.codigoCliente = data.respuesta.codigoNegocio;
      }
    })
    console.log(this.registroAgendaDTO);
  }
}
