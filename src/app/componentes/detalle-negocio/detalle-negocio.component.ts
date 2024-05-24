import { Component } from '@angular/core';
import { ItemNegocioDTO } from '../../dto/negocio/item-negocio-dto';
import { ActivatedRoute } from '@angular/router';
import { NegociosService } from '../../servicios/negocios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-negocio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-negocio.component.html',
  styleUrl: './detalle-negocio.component.css'
})
export class DetalleNegocioComponent {
  codigoNegocio: string = '';
  negocio: ItemNegocioDTO | undefined;

  constructor(private route: ActivatedRoute, private negociosService: NegociosService) {
    this.route.params.subscribe((params) => {
      this.codigoNegocio = params['codigo'];
      this.obtenerNegocio();
    });
  }

  public obtenerNegocio() {
    this.negociosService.obtener(this.codigoNegocio).subscribe(
      (respuesta: any) => {
        if (respuesta && respuesta.respuesta) {
          this.negocio = respuesta.respuesta;
        }
      },
      (error) => {
        console.error('Error al obtener el negocio:', error);
      }
    );
  }
}