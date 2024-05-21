import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/MensajeDTO';
import { ActualizarClienteDTO } from '../dto/cliente/actualizarclienteDTO';
import { FavoritoDTO } from '../dto/cliente/favoritoDTO';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private userUrl = "http://localhost:8081/api/clientes";

  constructor(private http: HttpClient) { }

  public editarPerfil(actualizarClienteDTO: ActualizarClienteDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/actualizar-perfil-cliente`, actualizarClienteDTO);
  }

  public eliminarCuenta(codigo: number): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar/${codigo}`);
  }

  public agregarFavoritos(sitioFavoritoDTO: FavoritoDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/sitios-favoritos`, sitioFavoritoDTO);
  }

  public mostrarFavoritos(codigoCliente: number): Observable<MensajeDTO> {
    //MIS DUDAS CON LA RUTA
    return this.http.get<MensajeDTO>(`${this.userUrl}/obtener-favoritos-cliente/${codigoCliente}`);
  }

  public removerFavoritos(codigoRemoverFavoritos: number): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar-favoritos/${codigoRemoverFavoritos}`);
  }

  public listaLugaresCreados(codigoLugaresCreados: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/lugares-creados-cliente/${codigoLugaresCreados}`);
  }

  


  //=================================================================================================0
  //no se su se utilice
  /*public enviarLinkRecuperacion(): Observable<MensajeDTO>{
    return this.http.put<MensajeDTO>(`${this.userUrl}/enviar-link-recuperacion`,ImagenDTO );
  }

  public cambiarPassword(CambiarPasswordDTO: CambiarPasswordDTO): Observable<MensajeDTO>{
    return this.http.put<MensajeDTO>(`${this.userUrl}/cambiar-password`, CambiarPasswordDTO);
  }

  public agendarCita(agendarCitaDTO: AgendarCitaPacienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/agendar-cita`, agendarCitaDTO);
  }

  public crearPQRS(registroPQRSDTO: CrearPQRSDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/crear-pqrs`, registroPQRSDTO);
  }

  public listarPQRSPaciente(codigoPaciente: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-pqrs/${codigoPaciente}`);
  }

  public verDetallePQRS(codigo: number): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.userUrl}/ver-detalle-pqrs/${codigo}`);
  }

  //NO CREO QUE SE UTILICE
  public responderPQRS(codigo: number): Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-pqrs/${codigo}`);
  }

  //COM SE LE PASA EL EL filtroBusquedaDTO al lado de la url SI ES UN GET
  public filtrarCitasPorFecha(filtroBusquedaDTO: FiltroBusquedaDTO): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/filtrar-citas-por-fecha`);
  }

  //COM SE LE PASA EL EL filtroBusquedaDTO al lado de la url SI ES UN GET
  public filtrarCitasPorMedico(filtroBusquedaDTO: FiltroBusquedaDTO): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/filtrar-citas-por-medico`);
  }*/

}
