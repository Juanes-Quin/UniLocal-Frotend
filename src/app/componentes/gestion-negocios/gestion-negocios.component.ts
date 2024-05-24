import { Component } from '@angular/core';
import { ItemNegocioDTO } from '../../dto/negocio/item-negocio-dto';
import { NegociosService } from '../../servicios/negocios.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PublicoService } from '../../servicios/publico.service';
import { TokenService } from '../../servicios/token.service';

@Component({
  selector: 'app-gestion-negocios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gestion-negocios.component.html',
  styleUrl: './gestion-negocios.component.css'
})

export class GestionNegociosComponent {

  negocios: ItemNegocioDTO[];

constructor(private negocioService: NegociosService, private publicoService: PublicoService, private tokenService: TokenService) {
this.negocios = [];
this.listarNegocios();
}

/*
public listarNegocios(){
this.negocios = this.negocioService.listar();
}*/

public listarNegocios(){
  const codigoCliente = this.tokenService.getCodigo();
  this.negocioService.listarNegociosPropietario(codigoCliente).subscribe({
  next: (data) => {
  this.negocios = data.respuesta;
  },
  error: (error) => {
  console.error(error);
  }
  });
  }

}
