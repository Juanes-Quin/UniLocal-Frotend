import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DetalleAgendaDTO } from '../../dto/agenda/detalleAgendaDTO';
import { AuthService } from '../../servicios/auth.service';
import { TokenService } from '../../servicios/token.service';
import { ClienteService } from '../../servicios/cliente.service';

@Component({
  selector: 'app-ver-detalle-agenda',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ver-detalle-agenda.component.html',
  styleUrl: './ver-detalle-agenda.component.css'
})
export class VerDetalleAgendaComponent {
  detalleAgendaDTO: DetalleAgendaDTO;
  verAgenda: String [];

  constructor(private clienteServicie: ClienteService,private authService: AuthService, private tokenService: TokenService){
    this.detalleAgendaDTO = new DetalleAgendaDTO();
    this.verAgenda = [];
  }

  guardarAgenda(agenda: DetalleAgendaDTO) {
    // Lógica para guardar la agenda específica
    console.log('Agenda guardada', agenda);
  }

  private cargarAgenda() {
    let codigo = this.tokenService.getCodigo();
    this.clienteServicie.obtenerReserva(codigo).subscribe({
        next: (data) => {
        this.verAgenda = data.respuesta;
      },
        error: (error) => {
        console.log("Error al cargar las ciudades");
      }
    });
    }

}
