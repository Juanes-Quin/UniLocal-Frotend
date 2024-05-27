import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { NegociosService } from '../../servicios/negocios.service';
import { MapaService } from '../../servicios/mapa.service';
import {ItemNegocioDTO} from "../../dto/negocio/item-negocio-dto";
import {Alerta} from "../../model/alerta";
import {BusquedaCategoriaNegocioDTO} from "../../dto/BusquedaCategoriaNegocioDTO";
import {BusquedaDistanciaDTO} from "../../dto/BusquedaDistanciaDTO";
import {BusquedaEstadoNegocioDTO} from "../../dto/BusquedaEstadoNegocioDTO";
import {BusquedaNombreDTO} from "../../dto/BusquedaNombreDTO";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './busqueda-negocio-estado.component.html',
  styleUrl: './busqueda-negocio-estado.component.css'
})
export class BusquedaNegocioEstadoComponent implements OnInit {
  busquedaEstadoNegocioDTO: BusquedaEstadoNegocioDTO;

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
    this.busquedaEstadoNegocioDTO = new BusquedaEstadoNegocioDTO(this.textoBusqueda);


  }

  public buscarNegocioEstado() {
    this.negociosService.filtrarPorEstado(this.busquedaEstadoNegocioDTO).subscribe({
      next: (data) => {
        this.alerta = new Alerta(data.nombre, "success");
        // Asignar los resultados de la búsqueda a la propiedad 'resultados'
        this.resultados.push(data);
      },
      error: (error) => {
        this.alerta = new Alerta("Error al buscar negocio por estado", "danger");
      }
    });

  }


  ngOnInit(): void {
    this.mapaService.crearMapa();
    this.buscarNegocioEstado();
    this.mapaService.pintarMarcadores(this.resultados);
  }

}
