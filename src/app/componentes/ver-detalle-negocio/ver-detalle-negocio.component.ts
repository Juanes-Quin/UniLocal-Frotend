import { Component } from '@angular/core';
import { ItemNegocioDTO } from '../../dto/negocio/item-negocio-dto';
import { ActivatedRoute } from '@angular/router';
import { NegociosService } from '../../servicios/negocios.service';
import { CommonModule } from '@angular/common';

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
constructor(private route: ActivatedRoute, private negociosService: NegociosService) {
this.route.params.subscribe((params) => {
this.codigoNegocio = params['codigo'];
this.obtenerNegocio();
});
}
public obtenerNegocio() {
const negocioConsultado = this.negociosService.obtener(this.codigoNegocio);
if (negocioConsultado != undefined) {
this.negocio = negocioConsultado;
}
}
}
