import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/MensajeDTO';
import { HttpClient } from '@angular/common/http';
import { LinkRecuperacionDTO } from '../dto/cuenta/link-recuperacion-dto';
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


}
