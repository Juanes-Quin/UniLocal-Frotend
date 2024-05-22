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

  //donde esta /registrar debe ir el mismo nombre que le pusieron en los controles del back end
  //ejemplo /registrar-cliente este es el que esta en el back en entonces se pone el mismo
  public registrarPaciente(paciente: RegistroClienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/registrar-cliente`, paciente);
  }

public login(loginDTO:SesionDTO):Observable<MensajeDTO>{
  return this.http.post<MensajeDTO>(`${this.authURL}/login-cliente`, loginDTO);
}

/*
TOCA HACER OTRO SESIONDTO PARA MODERADOR Y QUITAR UNO EN LOGIN DEL BACK END Y DEJARLO GENERICO
OSEA UN LOGIN PARA LOS DOS Y YA SE DIFERENCIA POR EL TOKEN

public login(loginDTO:SesionDTO):Observable<MensajeDTO>{
  return this.http.post<MensajeDTO>(`${this.authURL}/login-moderador`, loginDTO);
}
*/

}
