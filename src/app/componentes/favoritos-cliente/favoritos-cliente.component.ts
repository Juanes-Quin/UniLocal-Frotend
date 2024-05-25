import { Component } from '@angular/core';
import { FavoritoDTO } from '../../dto/cliente/favoritoDTO';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-favoritos-cliente',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './favoritos-cliente.component.html',
  styleUrl: './favoritos-cliente.component.css'
})
export class FavoritosClienteComponent {

  private favoritosDTO: FavoritoDTO[] = [];

  constructor(){

  }

  obtenerFavoritos(): FavoritoDTO[] {
    return this.favoritosDTO;
  }

  agregarFavorito(): void {
  }

  eliminarFavorito(): void {

  }
}


