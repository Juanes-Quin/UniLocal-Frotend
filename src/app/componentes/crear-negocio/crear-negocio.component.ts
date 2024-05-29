import { Component } from '@angular/core';
import { RegistroNegocioDTO } from '../../dto/negocio/RegistroNegocioDTO';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Horario } from '../../model/horario';
import { ClienteService } from '../../servicios/cliente.service';
import {MapaService} from "../../servicios/mapa.service";
import { AlertaComponent } from '../alerta/alerta.component';
import { Alerta } from '../../model/alerta';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-crear-negocio',
  standalone: true,
  imports: [FormsModule, CommonModule, AlertaComponent],
  templateUrl: './crear-negocio.component.html',
  styleUrls: ['./crear-negocio.component.css']
})
export class CrearNegocioComponent {
  registroNegocioDTO: RegistroNegocioDTO;
  tipo: string[];
  horarios: Horario[];
  archivos!: FileList[];
  alerta!: Alerta;

  constructor(private clienteService: ClienteService, private authService: AuthService, private mapaService: MapaService) {
    this.registroNegocioDTO = new RegistroNegocioDTO();
    this.horarios = [new Horario()];
    this.tipo =[];
    this.cargarTipo();
  }

  ngOnInit(): void {
    this.mapaService.crearMapa();
    this.mapaService.agregarMarcador().subscribe((marcador) => {
      this.registroNegocioDTO.ubicacion.latitud = marcador.lat;
      this.registroNegocioDTO.ubicacion.longitud = marcador.lng;
    });
  }

  agregarTelefono() {
    if (!this.registroNegocioDTO.telefono) {
      this.registroNegocioDTO.telefono = [];
    }
    this.registroNegocioDTO.telefono.push('');
  }

  eliminarTelefono(index: number) {
    this.registroNegocioDTO.telefono.splice(index, 1);
  }

  public crearNegocio() {
    this.registroNegocioDTO.horarios = this.horarios;
    this.clienteService.crearNegocio(this.registroNegocioDTO).subscribe({
      next: (data) => {
        this.alerta = new Alerta(data.respuesta, "success");
      },
      error: (error) => {
          this.alerta = new Alerta("Error al crear el negocio, intente nuevamente.", "danger");

      }

    });
    console.log(this.registroNegocioDTO);
  }

  public agregarHorario() {
    this.horarios.push(new Horario());
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
      this.registroNegocioDTO.urlFoto = [];

      for (let i = 0; i < this.archivos.length; i++) {
        this.registroNegocioDTO.urlFoto.push(this.archivos[i].item.name);
      }
    }
  }

  private cargarTipo() {
    this.clienteService.listarCategoriaNegocio().subscribe({
      next: (data) => {
        this.tipo = data.respuesta;
      },
      error: (error) => {
        console.log("Error al cargar los tipos");
      }
    });
  }
}
