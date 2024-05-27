import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { NegociosService } from '../../servicios/negocios.service';
import { MapaService } from '../../servicios/mapa.service';
import {ItemNegocioDTO} from "../../dto/negocio/item-negocio-dto";
import {Alerta} from "../../model/alerta";
import {CategoriaNegocioDTO} from "../../dto/CategoriaNegocioDTO";
import {BusquedaDistanciaDTO} from "../../dto/BusquedaDistanciaDTO";
import {EstadoNegocioDTO} from "../../dto/EstadoNegocioDTO";
import {BusquedaNombreDTO} from "../../dto/BusquedaNombreDTO";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent implements OnInit {
  busquedaNombreDTO: BusquedaNombreDTO;
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
    this.busquedaNombreDTO = new BusquedaNombreDTO(this.textoBusqueda);

  }

  public buscarNegocioNombre() {
    this.negociosService.buscarNegocioNombre(this.busquedaNombreDTO).subscribe({
      next: (data) => {
        this.alerta = new Alerta(data.nombre, "success");
        // Asignar los resultados de la búsqueda a la propiedad 'resultados'
        this.resultados.push(data);
      },
      error: (error) => {
        this.alerta = new Alerta("Error al buscar negocio por codigo", "danger");
      }
    });
  }


  ngOnInit(): void {
    this.mapaService.crearMapa();
    this.buscarNegocioNombre();
    this.mapaService.pintarMarcadores(this.resultados);
  }

}