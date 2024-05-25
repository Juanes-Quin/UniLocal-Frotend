import { Component } from '@angular/core';
import { ItemNegocioDTO } from '../../dto/negocio/item-negocio-dto';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../../servicios/token.service';
import { ClienteService } from '../../servicios/cliente.service';

@Component({
  selector: 'app-ver-detalle-negocio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ver-detalle-negocio.component.html',
  styleUrl: './ver-detalle-negocio.component.css'
})
export class VerDetalleNegocioComponent {

  codigoNegocio: string = '';
  negocio: ItemNegocioDTO | undefined;
  constructor(private route: ActivatedRoute, private clienteService: ClienteService, private tokenService: TokenService) {
    this.route.params.subscribe((params) => {
    this.codigoNegocio = params['codigo'];
    this.obtenerNegocio();
    });
}
public obtenerNegocio() {
  this.clienteService.buscarNegocio(this.codigoNegocio).subscribe({
    next: (data) => {
      this.negocio = data.respuesta;
    },
    error: (error) => {
      console.error('Error al obtener el negocio:', error);
    }
  });
}
}
