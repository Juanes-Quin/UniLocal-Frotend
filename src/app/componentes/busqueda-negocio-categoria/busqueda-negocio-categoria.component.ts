import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { MapaService } from '../../servicios/mapa.service';
import {ItemNegocioDTO} from "../../dto/negocio/item-negocio-dto";
import {Alerta} from "../../model/alerta";
import {BusquedaCategoriaNegocioDTO} from "../../dto/BusquedaCategoriaNegocioDTO";

import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {PublicoService} from "../../servicios/publico.service";
@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './busqueda-negocio-categoria.component.html',
  styleUrl: './busqueda-negocio-categoria.component.css'
})
export class BusquedaNegocioCategoriaComponent implements OnInit {
  textoBusqueda: string;
  resultados: ItemNegocioDTO[];
  alerta!: Alerta;

  constructor(
    private route: ActivatedRoute,
    private publicoService: PublicoService,

  ){
    this.resultados = [];
    this.textoBusqueda = "";
    this.route.params.subscribe(params => {
      this.textoBusqueda = params['texto']});
    this.buscarNegocioCategoria()


  }

  ngOnInit(): void {

    this.buscarNegocioCategoria();
  }


  public buscarNegocioCategoria() {
    this.publicoService.buscarNegocioCategoria(this.textoBusqueda).subscribe({
      next: (data) => {
        this.alerta = new Alerta(data.respuesta, "success");
        // Asignar los resultados de la búsqueda a la propiedad 'resultados'
        this.resultados = data.respuesta;
      },
      error: (error) => {
        this.alerta = new Alerta("Error al buscar negocio por categoria", "danger");
      }
    });
  }





}
