import { Component } from '@angular/core';
import { ItemNegocioDTO } from '../../dto/negocio/item-negocio-dto';
import { ActivatedRoute } from '@angular/router';
import { NegociosService } from '../../servicios/negocios.service';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../servicios/token.service';

@Component({
  selector: 'app-ver-detalle-negocio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-detalle-negocio.component.html',
  styleUrl: './ver-detalle-negocio.component.css'
})
export class VerDetalleNegocioComponent {
  codigoNegocio: string = '';
  negocio: ItemNegocioDTO | undefined;
  constructor(private route: ActivatedRoute, private negociosService: NegociosService, private tokenService: TokenService) {
    this.route.params.subscribe((params) => {
    this.codigoNegocio = params['codigo'];
    this.obtenerNegocio();
    });
}
public obtenerNegocio() {
  this.negociosService.obtener(this.codigoNegocio).subscribe({
    next: (data) => {
      this.negocio = data.respuesta;
    },
    error: (error) => {
      console.error('Error al obtener el negocio:', error);
    }
  });
}
}
