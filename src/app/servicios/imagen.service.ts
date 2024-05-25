import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../dto/MensajeDTO';
import { Observable } from 'rxjs';
import { ImagenDTO } from '../dto/ImagenDTO';

@Injectable({
  providedIn: 'root'
  })
  export class ImagenService {
    private imgURL = "http://localhost:8080/api/imagenes";
    constructor(private http: HttpClient) { }

    public subir(imagen: FormData): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.imgURL}/subir-imagen`, imagen);
    }
    
    public eliminar(imagenDTO: ImagenDTO): Observable<MensajeDTO> {
    return this.http.request<MensajeDTO>('delete', `${this.imgURL}/eliminar`, { body: imagenDTO});
    }
  }
