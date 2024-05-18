import { Component } from '@angular/core';
import { RegistroAgendaDTO } from '../../dto/agenda/registroAgendaDTO';
import { DetalleAgendaDTO } from '../../dto/agenda/detalleAgendaDTO';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'

})
export class AgendaComponent {


}
