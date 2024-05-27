import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { NegociosService } from '../../servicios/negocios.service';
import { MapaService } from '../../servicios/mapa.service';
import {ItemNegocioDTO} from "../../dto/negocio/item-negocio-dto";
import {Alerta} from "../../model/alerta";
import {BusquedaCategoriaNegocioDTO} from "../../dto/BusquedaCategoriaNegocioDTO";

import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './busqueda-negocio-categoria.component.html',
  styleUrl: './busqueda-negocio-categoria.component.css'
})
export class BusquedaNegocioCategoriaComponent implements OnInit {
  busquedaCategoriaNegocioDTO: BusquedaCategoriaNegocioDTO;
  textoBusqueda: string;
  resultados: ItemNegocioDTO[];
  alerta!: Alerta;


  constructor(
    private route: ActivatedRoute,
    private negociosService: NegociosService,
    private mapaService: MapaService

  ){
    this.resultados = [];
    this.textoBusqueda = "";
    this.route.params.subscribe(params => {
      this.textoBusqueda = params['texto']});
    this.busquedaCategoriaNegocioDTO = new BusquedaCategoriaNegocioDTO(this.textoBusqueda);

  }

  public buscarNegocioCategoria() {
    this.negociosService.buscarNegocioCategoria(this.busquedaCategoriaNegocioDTO).subscribe({
      next: (data) => {
        this.alerta = new Alerta(data.nombre, "success");
        // Asignar los resultados de la búsqueda a la propiedad 'resultados'
        this.resultados.push(data);
      },
      error: (error) => {
        this.alerta = new Alerta("Error al buscar negocio por categoria", "danger");
      }
    });
  }



  ngOnInit(): void {
    this.mapaService.crearMapa();
    this.buscarNegocioCategoria();
    this.mapaService.pintarMarcadores(this.resultados);
  }

}
