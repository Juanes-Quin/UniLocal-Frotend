import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {ItemNegocioDTO} from "../../dto/negocio/item-negocio-dto";
import {Alerta} from "../../model/alerta";

import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {PublicoService} from "../../servicios/publico.service";
@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './busqueda-negocio-nombre.component.html',
  styleUrl: './busqueda-negocio-nombre.component.css'
})
export class BusquedaNegocioNombreComponent implements OnInit {
  textoBusqueda: string;
  resultados: ItemNegocioDTO[];
  alerta!: Alerta;



  constructor(
    private route: ActivatedRoute,
    private publicoService: PublicoService


  ){
    this.resultados = [];
    this.textoBusqueda = "";
    this.route.params.subscribe(params => {
      this.textoBusqueda = params['texto']});
    this.buscarNegocioNombre();
  }

  ngOnInit(): void {

    this.buscarNegocioNombre();
  }


  public buscarNegocioNombre() {
    this.publicoService.buscarNegocioNombre(this.textoBusqueda).subscribe({
      next: (data) => {
        // Asignar los resultados de la búsqueda a la propiedad 'resultados'
        this.resultados = data.respuesta;
      },
      error: (error) => {
        this.alerta = new Alerta("danger", "Error al buscar los negocios");
      }
    });
  }





}
