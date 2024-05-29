import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/MensajeDTO';
import { HttpClient } from '@angular/common/http';
import { LinkRecuperacionDTO } from '../dto/cuenta/link-recuperacion-dto';
import { BusquedaNombreDTO } from '../dto/BusquedaNombreDTO';
import { BusquedaCategoriaNegocioDTO } from '../dto/BusquedaCategoriaNegocioDTO';
import { BusquedaDistanciaDTO } from '../dto/BusquedaDistanciaDTO';
import { BusquedaEstadoNegocioDTO } from '../dto/BusquedaEstadoNegocioDTO';
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

    enviarLinkRecuperacion(linkRecuperacionDTO: LinkRecuperacionDTO): Observable<MensajeDTO> {
      return this.http.post<MensajeDTO>(`${this.publicUrl}/enviar-link-recuperacion-password`, linkRecuperacionDTO);
    }

   /**
    * enviarLinkRecuperacionCliente(linkRecuperacionDTO: LinkRecuperacionDTO): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.publicUrl}/enviar-link-recuperacion-password-cliente/${linkRecuperacionDTO}`);
    }

    enviarLinkRecuperacionModerador(linkRecuperacionDTO: LinkRecuperacionDTO): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.publicUrl}/enviar-link-recuperacion-password-moderador/${linkRecuperacionDTO}`);
    }
    * */

    listarNegocios(): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.publicUrl}/listar-negocios`);
    }
  buscarNegocio(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicUrl}/buscar-negocio/${codigoNegocio}`);
  }

  buscarNegocioNombre(nombre: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicUrl}/buscar-negocio-nombre/${nombre}`);
  }

  buscarNegocioCategoria(categoriaNegocioDTO: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicUrl}/buscar-negocio-categoria/${categoriaNegocioDTO}`);
  }

  buscarNegocioDistancia(busquedaDistanciaDTO: BusquedaDistanciaDTO): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicUrl}/buscar-negocio-distancia/${busquedaDistanciaDTO}`);
  }

  filtrarPorEstado(estadoNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicUrl}/filtrar-estado/${estadoNegocio}`);
  }

  listarComentariosNegocio(idNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicUrl}/listar-comentarios-negocio/${idNegocio}`);
  }
}
