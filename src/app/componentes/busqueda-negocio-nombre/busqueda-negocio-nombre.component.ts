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
import {AlertaComponent} from "../alerta/alerta.component";
import {PublicoService} from "../../servicios/publico.service";
@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './busqueda-negocio-nombre.component.html',
  styleUrl: './busqueda-negocio-nombre.component.css'
})
export class BusquedaNegocioNombreComponent implements OnInit {
  busquedaNombreDTO: BusquedaNombreDTO;
  textoBusqueda: string;
  resultados: ItemNegocioDTO[];
  alerta!: Alerta;


  constructor(
    private route: ActivatedRoute,
    private publicoService: PublicoService,
    private mapaService: MapaService,


  ){
    this.resultados = [];
    this.textoBusqueda = "";
    this.route.params.subscribe(params => {
    this.textoBusqueda = params['texto']});
    this.busquedaNombreDTO = new BusquedaNombreDTO(this.textoBusqueda);
    this.buscarNegocioNombre();
  }

  public buscarNegocioNombre() {
    this.publicoService.buscarNegocioNombre(this.busquedaNombreDTO).subscribe({
      next: (data) => {
        this.resultados = data.respuesta;
      },
      error: (error) => {
        this.alerta = new Alerta("danger", "Error al buscar los negocios");
      }
    });
  }



  ngOnInit(): void {
    this.mapaService.crearMapa();
    this.buscarNegocioNombre();
    this.mapaService.pintarMarcadores(this.resultados);
  }

}
