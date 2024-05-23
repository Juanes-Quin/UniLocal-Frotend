import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/MensajeDTO';
import { HttpClient } from '@angular/common/http';
@Injectable({
providedIn: 'root'
})
  export class PublicoService {

  private publicoURL = "http://localhost:8080/api/publico";

  constructor(private http: HttpClient) { }

  public listarCiudades(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/listar-ciudades`);
  }

  public listarTiposNegocio(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/listar-tipos-negocio`);
  }

  
  

}
