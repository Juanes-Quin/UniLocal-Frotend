import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroClienteDTO } from '../dto/cliente/registroClienteDTO';
import { MensajeDTO } from '../dto/MensajeDTO';
import { SesionDTO } from '../dto/cuenta/sesionDTO';

const TOKEN_KEY = "AuthToken";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authURL = "http://localhost:8081/api/auth";

  constructor(private http: HttpClient) { }

//login
public login(loginDTO:SesionDTO):Observable<MensajeDTO>{
  return this.http.post<MensajeDTO>(`${this.authURL}/login`, loginDTO);
}

public registrarCliente(RegistroClienteDTO:RegistroClienteDTO):Observable<MensajeDTO>{
  return this.http.post<MensajeDTO>(`${this.authURL}/registrar-cliente`, RegistroClienteDTO);
}

}
