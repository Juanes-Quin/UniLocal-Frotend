import { Injectable } from '@angular/core';
import {BusquedaNombreDTO} from "../dto/BusquedaNombreDTO";
import {Observable} from "rxjs";
import {MensajeDTO} from "../dto/MensajeDTO";
import {BusquedaCategoriaNegocioDTO} from "../dto/BusquedaCategoriaNegocioDTO";
import {BusquedaDistanciaDTO} from "../dto/BusquedaDistanciaDTO";
import {BusquedaEstadoNegocioDTO} from "../dto/BusquedaEstadoNegocioDTO";
import {HttpClient} from "@angular/common/http";
import {ItemNegocioDTO} from "../dto/negocio/item-negocio-dto";

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

  private publicUrl = "http://localhost:8080/api/negocios";

  constructor(private http: HttpClient) { }

  buscarNegocio(codigoNegocio: string): Observable<ItemNegocioDTO> {
    return this.http.get<ItemNegocioDTO>(`${this.publicUrl}/buscar-negocio/${codigoNegocio}`);
  }

  buscarNegocioNombre(busquedaNombreDTO: BusquedaNombreDTO): Observable<ItemNegocioDTO> {
    return this.http.get<ItemNegocioDTO>(`${this.publicUrl}/buscar-negocio-nombre/${busquedaNombreDTO}`);
  }

  buscarNegocioCategoria(categoria: BusquedaCategoriaNegocioDTO): Observable<ItemNegocioDTO> {
    return this.http.get<ItemNegocioDTO>(`${this.publicUrl}/buscar-negocio-categoria/${categoria}`);
  }

  buscarNegocioDistancia(busquedaDistanciaDTO: BusquedaDistanciaDTO): Observable<ItemNegocioDTO> {
    return this.http.get<ItemNegocioDTO>(`${this.publicUrl}/buscar-negocio-distancia/${busquedaDistanciaDTO}`);
  }

  filtrarPorEstado(estadoNegocio: BusquedaEstadoNegocioDTO): Observable<ItemNegocioDTO> {
    return this.http.get<ItemNegocioDTO>(`${this.publicUrl}/filtar-estado/${estadoNegocio}`);
  }

  listarComentariosNegocio(idNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicUrl}/listar-comentarios-negocio/${idNegocio}`);
  }
}
