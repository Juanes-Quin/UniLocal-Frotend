import { Component } from '@angular/core';
import { RegistroNegocioDTO } from '../../dto/negocio/RegistroNegocioDTO';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../servicios/token.service';
import { MapaService } from '../../servicios/mapa.service';


@Component({
  selector: 'app-crear-negocio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './crear-negocio.component.html',
  styleUrl: './crear-negocio.component.css'
})

export class CrearNegocioComponent {
  registroNegocioDTO: RegistroNegocioDTO;
  archivos!:FileList;
  
  constructor(private tokenService: TokenService, private mapaService: MapaService){
    this.registroNegocioDTO = new RegistroNegocioDTO(); // Crear una instancia de RegistroNegocioDTO

  }

  ngOnInit1() {
    this.setCodigoPropietario();
  }

  private setCodigoPropietario() {
    const token = this.tokenService.getToken();
    if (token) {
      const decodedToken: any = this.tokenService.getToken;
      this.registroNegocioDTO.codigoPropietario = decodedToken.id; 
    }
  }
  
  public registrarNegocio() {
    if(this.registroNegocioDTO.urlFoto.length > 0) {
      console.log(this.registroNegocioDTO);
    } else {
      console.log("Debe agregar al menos una foto para su negocio")
    }
  }

  public onFileChange(event: any) {
    if(event.target.files.length > 0) {
      this.archivos = event.target.files;
      const archivosName = Array.from(this.archivos).map(file => file.name); 
      this.registroNegocioDTO.urlFoto = archivosName;
    }
  }

  ngOnInit(): void {
    this.mapaService.crearMapa();

    this.mapaService.agregarMarcador().subscribe((marcador) => {
      this.registroNegocioDTO.ubicacion.latitud = marcador.lat;
      this.registroNegocioDTO.ubicacion.longitud = marcador.lng;
    })
  }
}



