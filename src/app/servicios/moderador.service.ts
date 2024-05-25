import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/MensajeDTO';
import { HttpClient } from '@angular/common/http';
import { DetalleModeradorDTO } from '../dto/moderador/detalle-moderador-dto';
import { RevisionesModeradorDTO } from '../dto/moderador/RevisionesModeradorDTO';
import { CambioPasswordDTO } from '../dto/cuenta/cambioPasswordDTO';

@Injectable({
  providedIn: 'root'
})
export class ModeradorService {

  private moderUrl = "http://localhost:8080/api/moderadores";
  constructor(private http: HttpClient) { }

    listarClientes(): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.moderUrl}/listar-clientes`);
    }

    obtenerHistorialRevisiones(idNegocio: string): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.moderUrl}/obtener-historial-revisiones/${idNegocio}`);
    }

    bloquearUsuario(codigo: string): Observable<MensajeDTO> {
      return this.http.put<MensajeDTO>(`${this.moderUrl}/bloquear-usuario/${codigo}`, null);
    }

    rechazarNegocio(revisionesModeradorDTO: RevisionesModeradorDTO): Observable<MensajeDTO> {
      return this.http.put<MensajeDTO>(`${this.moderUrl}/rechazar-negocio`, revisionesModeradorDTO);
    }

    aprobarNegocio(revisionesModeradorDTO: RevisionesModeradorDTO): Observable<MensajeDTO> {
      return this.http.put<MensajeDTO>(`${this.moderUrl}/aprobar-negocio`, revisionesModeradorDTO);
    }

    cambiarPassword(cambioPasswordDTO: CambioPasswordDTO): Observable<MensajeDTO> {
      return this.http.put<MensajeDTO>(`${this.moderUrl}/cambiar-password`, cambioPasswordDTO);
    }

    listarNegociosPropietario(codigoPropietario: string): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.moderUrl}/listar-negocio-propietario/${codigoPropietario}`);
    }

    buscarNegocio(codigoNegocio: string): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.moderUrl}/buscar-negocio/${codigoNegocio}`);
    }

    buscarCliente(idCuenta: string): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.moderUrl}/buscar-cliente/${idCuenta}`);
    }

    obtenerModerador(idCuenta: string): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.moderUrl}/obtener-moderador/${idCuenta}`);
    }

    obtenerClienteNegocio(idNegocio: string): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.moderUrl}/obtener-cliente-por-idNegocio/${idNegocio}`);
    }

}
