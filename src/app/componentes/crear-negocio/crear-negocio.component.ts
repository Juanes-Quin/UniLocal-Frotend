import { Component } from '@angular/core';
import { RegistroNegocioDTO } from '../../dto/negocio/RegistroNegocioDTO';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../servicios/token.service';

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
  
  
  constructor(private tokenService: TokenService){
    this.registroNegocioDTO = new RegistroNegocioDTO(); // Crear una instancia de RegistroNegocioDTO

  }

  ngOnInit() {
    this.setCodigoPropietario();
  }

  private setCodigoPropietario() {
    const token = this.tokenService.getToken();
    if (token) {
      const decodedToken: any = this.tokenService.getCodigo;
      this.registroNegocioDTO.codigoPropietario = decodedToken.id; 
    }
  }
  
  public registrarNegocio() {
    if(this.registroNegocioDTO.urlFoto && this.registroNegocioDTO.categoriaNegocio && this.registroNegocioDTO.telefono != "") {
      console.log(this.registroNegocioDTO);
    } else {
      console.log("Debe agregar las fotos, el horario y/o los telefónos")
    }
  }

  public onFileChange(event: any) {
    if(event.target.files.length > 0) {
      this.archivos = event.target.files;
      this.registroNegocioDTO.urlFoto = this.archivos[0].name;
    }
  }
}



