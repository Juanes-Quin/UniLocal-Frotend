import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { MapaService } from '../../servicios/mapa.service';
import {ItemNegocioDTO} from "../../dto/negocio/item-negocio-dto";
import {Alerta} from "../../model/alerta";
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
    this.buscarNegocioEstado();

  }

  ngOnInit(): void {
    this.buscarNegocioEstado();
  }


  public buscarNegocioEstado() {
    this.publicoService.filtrarPorEstado(this.textoBusqueda).subscribe({
      next: (data) => {
        this.alerta = new Alerta(data.respuesta, "success");
        // Asignar los resultados de la búsqueda a la propiedad 'resultados'
        this.resultados = data.respuesta;
      },
      error: (error) => {
        this.alerta = new Alerta("Error al buscar negocio por estado", "danger");
      }
    });

  }




}
