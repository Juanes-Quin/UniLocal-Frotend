import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SesionDTO } from '../dto/cuenta/sesionDTO';
import { MensajeDTO } from '../dto/MensajeDTO';
import { Token } from '@angular/compiler';
import { Observable } from 'rxjs';
import { RegistroClienteDTO } from '../dto/cliente/registroClienteDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = "http://localhost:8080/api/auth";
  constructor(private http: HttpClient) { }

  public registrarCliente(cliente: RegistroClienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/registrar-cliente`, cliente);
  }

  public loginCliente(loginDTO: SesionDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/login-cliente`, loginDTO);
  }

}
