import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistroAgendaDTO } from '../../dto/agenda/registroAgendaDTO';
import { ClienteService } from '../../servicios/cliente.service';
import { TokenService } from '../../servicios/token.service';
import { AuthService } from '../../servicios/auth.service';

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
    // Lógica para registrar la agenda
    console.log(this.registroAgendaDTO);
  }
}
