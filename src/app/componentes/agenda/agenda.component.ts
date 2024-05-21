import { Component } from '@angular/core';
import { RegistroAgendaDTO } from '../../dto/agenda/registroAgendaDTO';
import { DetalleAgendaDTO } from '../../dto/agenda/detalleAgendaDTO';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../servicios/token.service';
import { AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'

})
export class AgendaComponent {

  registroAgendaDTO: RegistroAgendaDTO;
  detalleAgendaDTO: DetalleAgendaDTO;

  constructor(){
    this.registroAgendaDTO = new RegistroAgendaDTO();
    this.detalleAgendaDTO = new DetalleAgendaDTO();
  }

}
