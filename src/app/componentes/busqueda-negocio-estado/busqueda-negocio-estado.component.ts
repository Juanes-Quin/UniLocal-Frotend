import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { MapaService } from '../../servicios/mapa.service';
import {ItemNegocioDTO} from "../../dto/negocio/item-negocio-dto";
import {Alerta} from "../../model/alerta";
import {BusquedaCategoriaNegocioDTO} from "../../dto/BusquedaCategoriaNegocioDTO";
import {BusquedaDistanciaDTO} from "../../dto/BusquedaDistanciaDTO";
import {BusquedaEstadoNegocioDTO} from "../../dto/BusquedaEstadoNegocioDTO";
import {BusquedaNombreDTO} from "../../dto/BusquedaNombreDTO";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {PublicoService} from "../../servicios/publico.service";
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
    private publicoService: PublicoService,
    private mapaService: MapaService

  ){
    this.resultados = [];
    this.textoBusqueda = "";
    this.route.params.subscribe(params => {
      this.textoBusqueda = params['texto']});
    this.busquedaEstadoNegocioDTO = new BusquedaEstadoNegocioDTO(this.textoBusqueda);
    this.buscarNegocioEstado();

  }

  public buscarNegocioEstado() {
    this.publicoService.filtrarPorEstado(this.busquedaEstadoNegocioDTO).subscribe({
      next: (data) => {
        this.alerta = new Alerta(data.respuesta, "success");
        // Asignar los resultados de la búsqueda a la propiedad 'resultados'
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
