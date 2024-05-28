import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/MensajeDTO';
import { ActualizarClienteDTO } from '../dto/cliente/actualizarclienteDTO';
import { IDClienteYNegocioDTO } from '../dto/negocio/IDClienteYNegocioDTO';
import { BusquedaDistanciaDTO } from '../dto/BusquedaDistanciaDTO';
import { RegistroComentarioDTO } from '../dto/comentario/registroComentarioDTO';
import { RespuestaComentarioDTO } from '../dto/comentario/respuestaComentarioDTO';
import { CambioPasswordDTO } from '../dto/cuenta/cambioPasswordDTO';
import { ReporteDTO } from '../dto/negocio/ReporteDTO';
import { ActualizarNegocioDTO } from '../dto/negocio/ActualizarNegocioDTO';
import { RegistroNegocioDTO } from '../dto/negocio/RegistroNegocioDTO';
import { DetalleReservaDTO } from '../dto/reserva/DetalleReservaDTO';
import { RegistroAgendaDTO } from '../dto/agenda/registro-agenda-dto';
import { BusquedaNombreDTO } from '../dto/BusquedaNombreDTO';
import {BusquedaCategoriaNegocioDTO} from "../dto/BusquedaCategoriaNegocioDTO";
import {BusquedaEstadoNegocioDTO} from "../dto/BusquedaEstadoNegocioDTO";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private userUrl = "http://localhost:8080/api/clientes";

  constructor(private http: HttpClient) { }

  public actualizarCliente(actualizarClienteDTO: ActualizarClienteDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/actualizar-perfil-cliente`, actualizarClienteDTO);
  }

  public obtenerCliente(idCuenta: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/obtener-cliente/${idCuenta}`);
  }

  public eliminarCliente(idCuenta: string): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar/${idCuenta}`);
  }

  public agregarFavoritos(idClienteYNegocioDTO: IDClienteYNegocioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/agregar-favoritos`, idClienteYNegocioDTO);
  }

  public mostrarFavoritos(idCliente: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/mostrar-favoritos/${idCliente}`);
  }

  public eliminarFavoritos(idNegocio: string): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/eliminar-favoritos`, idNegocio);
  }

  public listarLugaresCreados(idClienteYNegocioDTO: IDClienteYNegocioDTO): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/lugares-creados-cliente/${idClienteYNegocioDTO}`);
  }

  public buscarNegocioNombre(busquedaNombreDTO: BusquedaNombreDTO): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/buscar-negocio-nombre/${busquedaNombreDTO}`);
  }

  public buscarNegocioCategoria(categoria: BusquedaCategoriaNegocioDTO): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/buscar-negocio-categoria/${categoria}`);
  }

  public buscarNegocioDistancia(busquedaDistanciaDTO: BusquedaDistanciaDTO): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/buscar-negocio-distancia/${busquedaDistanciaDTO}`);
  }

  public recomendarNegocio(idClienteYNegocioDTO: IDClienteYNegocioDTO): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/recomendar-negocio/${idClienteYNegocioDTO}`);
  }

  public filtrarPorEstado(estadoNegocio: BusquedaEstadoNegocioDTO): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/filtar-estado/${estadoNegocio}`);
  }

  public registrarAgenda(registroAgendaDTO: RegistroAgendaDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/registrar-agenda`, registroAgendaDTO);
  }

  public actualizarAgenda(registroAgendaDTO: RegistroAgendaDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/actualizar-agenda`, registroAgendaDTO);
  }

  public eliminarAgenda(idClienteYNegocioDTO: IDClienteYNegocioDTO): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar-agenda/${idClienteYNegocioDTO}`);
  }

  public obtenerAgenda(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/obtener-agenda/${codigoNegocio}`);
  }

  public cambiarPassword(cambioPasswordDTO: CambioPasswordDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/cambiar-password`, cambioPasswordDTO);
  }

  public crearComentario(registroComentarioDTO: RegistroComentarioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/crear-comentario`, registroComentarioDTO);
  }

  public responderComentario(respuestaComentarioDTO: RespuestaComentarioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/responder-comentario`, respuestaComentarioDTO);
  }

  public listarComentariosNegocio(idNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-comentarios-negocio/${idNegocio}`);
  }

  public crearNegocio(registroNegocioDTO: RegistroNegocioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/crear-negocio`, registroNegocioDTO);
  }

  public actualizarNegocio(actualizarNegocioDTO: ActualizarNegocioDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/actualizar-negocio`, actualizarNegocioDTO);
  }

  public eliminarNegocio(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar-negocio/${codigoNegocio}`);
  }

  public buscarNegocio(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/buscar-negocio/${codigoNegocio}`);
  }

  public generarPDF(reporteDTO: ReporteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/generar-PDF`, reporteDTO);
  }

  public registrarReserva(detalleReservaDTO: DetalleReservaDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/registrar-reserva`, detalleReservaDTO);
  }

  public actualizarReserva(detalleReservaDTO: DetalleReservaDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/actualizar-reserva`, detalleReservaDTO);
  }

  public obtenerReserva(idCliente: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/obtener-reserva/${idCliente}`);
  }

  public eliminarReserva(idClienteYNegocioDTO: IDClienteYNegocioDTO): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar-reserva/${idClienteYNegocioDTO}`);
  }

  public listarReservas(idNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-reservas/${idNegocio}`);
  }

  public listarNegociosPropietario(codigoPropietario: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-negocio-propietario/${codigoPropietario}`);
  }

  public listarCiudades(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-ciudades`);
  }

  public listarCategoriaNegocio(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-categoria-negocio`);
  }

  public verDetalleNegocio(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/ver-detalle-negocio/${codigoNegocio}`);
  }

}
