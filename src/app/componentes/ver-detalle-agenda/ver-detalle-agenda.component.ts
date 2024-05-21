import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DetalleAgendaDTO } from '../../dto/agenda/detalleAgendaDTO';

@Component({
  selector: 'app-ver-detalle-agenda',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ver-detalle-agenda.component.html',
  styleUrl: './ver-detalle-agenda.component.css'
})
export class VerDetalleAgendaComponent {
  detalleAgendaDTO: DetalleAgendaDTO[];

  constructor(){
    this.detalleAgendaDTO =[
      {
        tematica: ' 1',
        descripcion: 'Descripción de la reserva 1'
      },
      {
        tematica: 'Temática 2',
        descripcion: 'Descripción de la reserva 2'
      },
      {
        tematica: 'Temática 3',
        descripcion: 'Descripción de la reserva 3'
      }
    ];
  }

  guardarAgenda(agenda: DetalleAgendaDTO) {
    // Lógica para guardar la agenda específica
    console.log('Agenda guardada', agenda);
  }


}
