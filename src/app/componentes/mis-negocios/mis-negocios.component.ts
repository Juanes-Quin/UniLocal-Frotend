import { Component } from '@angular/core';
import { ItemNegocioDTO } from '../../dto/negocio/item-negocio-dto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PublicoService } from '../../servicios/publico.service';
import { TokenService } from '../../servicios/token.service';
import { ClienteService } from '../../servicios/cliente.service';
@Component({
  selector: 'app-mis-negocios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mis-negocios.component.html',
  styleUrl: './mis-negocios.component.css'
})
export class MisNegociosComponent {
  negocios: ItemNegocioDTO[];
  seleccionados: ItemNegocioDTO[];
  textoBtnEliminar: string;

  constructor(private clienteService: ClienteService, private publicoService: PublicoService, private tokenService: TokenService) {
    this.negocios = [];
    this.seleccionados = [];
    this.textoBtnEliminar = "Eliminar";
    this.listarNegocios();
  }

  /*
  public listarNegocios(){
  this.negocios = this.negocioService.listar();
  }*/

  public seleccionar(producto: ItemNegocioDTO, estado: boolean) {
    if (estado) {
      this.seleccionados.push(producto);
    } else {
      this.seleccionados.splice(this.seleccionados.indexOf(producto), 1);
    }
    this.actualizarMensaje();
  }

  private actualizarMensaje() {
    const tam = this.seleccionados.length;
    if (tam != 0) {
      if (tam == 1) {
        this.textoBtnEliminar = "1 elemento";
      } else {
        this.textoBtnEliminar = tam + " elementos";
      }
    } else {
      this.textoBtnEliminar = "";
    }
  }

  public borrarNegocios() {
    this.seleccionados.forEach(n => {
      this.clienteService.eliminarNegocio(n.codigoNegocio);
      this.negocios = this.negocios.filter(negocio => negocio.codigoNegocio !== n.codigoNegocio);
    });
    this.seleccionados = [];
    this.actualizarMensaje();
  }

  public listarNegocios() {
    const codigoCliente = this.tokenService.getCodigo();
    this.clienteService.listarNegociosPropietario(codigoCliente).subscribe({
      next: (data) => {
        this.negocios = data.respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    });

  }

}
