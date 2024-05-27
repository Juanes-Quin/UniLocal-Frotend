import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/MensajeDTO';
import { HttpClient } from '@angular/common/http';
import { LinkRecuperacionDTO } from '../dto/cuenta/link-recuperacion-dto';
import { BusquedaNombreDTO } from '../dto/BusquedaNombreDTO';
import { BusquedaDistanciaDTO } from '../dto/BusquedaDistanciaDTO';
import {CategoriaNegocioDTO} from "../dto/CategoriaNegocioDTO";
import {EstadoNegocioDTO} from "../dto/EstadoNegocioDTO";
@Injectable({
providedIn: 'root'
})
  export class PublicoService {

  private publicUrl = "http://localhost:8080/api/publico";

  constructor(private http: HttpClient) { }

    listarCiudades(): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.publicUrl}/listar-ciudades`);
    }

    listarCategoriaNegocio(): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.publicUrl}/listar-categoria-negocio`);
    }

    enviarLinkRecuperacionCliente(linkRecuperacionDTO: LinkRecuperacionDTO): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.publicUrl}/enviar-link-recuperacion-password-cliente/${linkRecuperacionDTO}`);
    }

    enviarLinkRecuperacionModerador(linkRecuperacionDTO: LinkRecuperacionDTO): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.publicUrl}/enviar-link-recuperacion-password-moderador/${linkRecuperacionDTO}`);
    }

    buscarNegocioNombre(busquedaNombreDTO: BusquedaNombreDTO): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.publicUrl}/buscar-negocio-nombre/${busquedaNombreDTO}`);
    }

    buscarNegocioCategoria(categoria: CategoriaNegocioDTO): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.publicUrl}/buscar-negocio-categoria/${categoria}`);
    }

    buscarNegocioDistancia(busquedaDistanciaDTO: BusquedaDistanciaDTO): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.publicUrl}/buscar-negocio-distancia/${busquedaDistanciaDTO}`);
    }

    filtrarPorEstado(estadoNegocio: EstadoNegocioDTO): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.publicUrl}/filtar-estado/${estadoNegocio}`);
    }

    buscarNegocio(codigoNegocio: string): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.publicUrl}/buscar-negocio/${codigoNegocio}`);
    }

    listarComentariosNegocio(idNegocio: string): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.publicUrl}/listar-comentarios-negocio/${idNegocio}`);
    }
}
