import { Injectable } from '@angular/core';
import { ItemNegocioDTO } from '../dto/negocio/item-negocio-dto';
import { RegistroNegocioDTO } from '../dto/negocio/RegistroNegocioDTO';
import { Ubicacion } from '../dto/ubicacion';
import { MensajeDTO } from '../dto/MensajeDTO';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActualizarNegocioComponent } from '../componentes/actualizar-negocio/actualizar-negocio.component';

export class NegociosService {
  private negociosURL = "http://localhost:8080/api/negocios";
  constructor(private http: HttpClient) { }
  public crear(negocioNuevo: RegistroNegocioDTO): Observable<MensajeDTO> {
  return this.http.post<MensajeDTO>(`${this.negociosURL}/crear`, negocioNuevo);
  }

  public actualizar(actualizacionNegocio: ActualizarNegocioComponent): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.negociosURL}/actualizar`, actualizacionNegocio);
    }
    public obtener(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.negociosURL}/obtener/${codigoNegocio}`);
    }
    public eliminar(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.negociosURL}/eliminar/${codigoNegocio}`);
    }
    public listarNegociosPropietario(codigoCliente: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.negociosURL}/listar-negocios/${codigoCliente}`);
    }
    }
