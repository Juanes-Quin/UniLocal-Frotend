import { Component } from '@angular/core';
import { ItemNegocioDTO } from '../../dto/negocio/item-negocio-dto';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../../servicios/token.service';
import { ClienteService } from '../../servicios/cliente.service';


@Component({
  selector: 'app-detalle-negocio',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './detalle-negocio.component.html',
  styleUrl: './detalle-negocio.component.css'
})
export class DetalleNegocioComponent {
  codigoNegocio: string = '';
  negocio: ItemNegocioDTO | undefined;

  constructor(private route: ActivatedRoute, private clienteService: ClienteService, private tokenService: TokenService) {
    this.route.params.subscribe((params) => {
      this.codigoNegocio = params['codigo'];
      this.obtenerNegocio();
    });
  }

  public obtenerNegocio() {
    this.clienteService.buscarNegocio(this.codigoNegocio).subscribe(
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
