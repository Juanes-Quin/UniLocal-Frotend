import { Component } from '@angular/core';
import { FavoritoDTO } from '../../dto/cliente/favoritoDTO';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { TokenService } from '../../servicios/token.service';
import { ClienteService } from '../../servicios/cliente.service';

@Component({
  selector: 'app-favoritos-cliente',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './favoritos-cliente.component.html',
  styleUrl: './favoritos-cliente.component.css'
})
export class FavoritosClienteComponent {

  favoritosDTO: FavoritoDTO[];
  clienteFavoritos: FavoritoDTO;

  constructor(private clienteService: ClienteService, private tokenService: TokenService){
    this.favoritosDTO = [];
    this.clienteFavoritos = new FavoritoDTO();

    this.listarNegocios();
  }

  public listarNegocios(){
    const codigoCliente = this.tokenService.getCodigo();
    this.clienteService.mostrarFavoritos(codigoCliente).subscribe({
    next: (data) => {
    this.favoritosDTO = data.respuesta;
    },
    error: (error) => {
    console.error(error);
    }
    });
    }

    public eliminarFavorito(){

      let codigo = this.tokenService.getCodigo();
      this.clienteService.eliminarFavoritos(codigo).subscribe({
        next: data => {
          this.clienteFavoritos.idNegocio = data.respuesta;
        },
        error: error => {
          console.log(error);
        }
      });

  }
}


