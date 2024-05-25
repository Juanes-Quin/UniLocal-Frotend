import { Component } from '@angular/core';
import { RegistroNegocioDTO } from '../../dto/negocio/RegistroNegocioDTO';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Horario } from '../../model/horario';
import { ClienteService } from '../../servicios/cliente.service';

@Component({
  selector: 'app-crear-negocio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './crear-negocio.component.html',
  styleUrls: ['./crear-negocio.component.css']
})
export class CrearNegocioComponent {
  registroNegocioDTO: RegistroNegocioDTO;
  horarios: Horario[];
  archivos!: FileList[];

  constructor(private clienteService: ClienteService) {
    this.registroNegocioDTO = new RegistroNegocioDTO();
    this.horarios = [new Horario()];
  }

  public crearNegocio() {
    this.registroNegocioDTO.horarios = this.horarios;
    this.clienteService.crearNegocio(this.registroNegocioDTO);
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
}