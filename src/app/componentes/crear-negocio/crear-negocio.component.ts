import { Component, OnInit } from '@angular/core';
import { RegistroNegocioDTO } from '../../dto/negocio/RegistroNegocioDTO';
import { ClienteService } from '../../servicios/cliente.service';
import { MapaService } from '../../servicios/mapa.service';
import { Alerta } from '../../model/alerta';
import { TokenService } from '../../servicios/token.service';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-crear-negocio',
  templateUrl: './crear-negocio.component.html',
  styleUrls: ['./crear-negocio.component.css']
})
export class CrearNegocioComponent implements OnInit {
  registroNegocioDTO: RegistroNegocioDTO;
  tipo: string[];
  horarios: string[] = [];
  archivos!: FileList[];
  alerta!: Alerta;

  constructor(private clienteService: ClienteService, private mapaService: MapaService, private tokenService: TokenService) {
    this.registroNegocioDTO = new RegistroNegocioDTO();
    this.tipo = [];
  }

  ngOnInit(): void {
    this.cargarTipo();
    this.mapaService.crearMapa();
    this.mapaService.agregarMarcador().subscribe((marcador) => {
      this.registroNegocioDTO.ubicacion.latitud = marcador.lat;
      this.registroNegocioDTO.ubicacion.longitud = marcador.lng;
    });
  }

  /*public crearNegocio() {
    const id = this.tokenService.getCodigo();

    let horariosString = '';
    for (let i = 0; i < this.horarios.length; i++) {
      horariosString += this.horarios[i] + ';';
    }

    this.registroNegocioDTO.horarios = horariosString;

    this.clienteService.crearNegocio(this.registroNegocioDTO).subscribe({
      next: (data) => {
        this.alerta = new Alerta(data.respuesta, "success");
      },
      error: (error) => {
        if (error.status === 400) {
          this.alerta = new Alerta(error, "danger");
        }
      }
    });
    console.log(this.registroNegocioDTO);
  }
  */

  public agregarHorario() {
    this.horarios.push('');
  }

  public eliminarHorario(index: number) {
    this.horarios.splice(index, 1);
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
        console.log("Error al cargar los tipos de Negocio");
      }
    });
  }
}
