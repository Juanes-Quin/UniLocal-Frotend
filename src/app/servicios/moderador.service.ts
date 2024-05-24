import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/MensajeDTO';
import { HttpClient } from '@angular/common/http';
import { ItemDetalleClienteDTO } from '../dto/cliente/itemDetalleClienteDTO';

@Injectable({
  providedIn: 'root'
})
export class ModeradorService {

  private authURL = "http://localhost:8080/api/moderadores";
  constructor(private http: HttpClient) { }

  public listarClientes():Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.authURL}/listar-clientes`);
  }

  
  public obtenerHistorialRevisiones(idNegocio: string):Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.authURL}/listar-clientes/${idNegocio}`);
  }

}
