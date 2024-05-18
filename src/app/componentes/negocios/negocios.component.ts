import { Component } from '@angular/core';
import { ActualizarNegocioDTO } from '../../dto/negocio/ActualizarNegocioDTO';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistroNegocioDTO } from '../../dto/negocio/RegistroNegocioDTO';
import { ReporteDTO } from '../../dto/negocio/ReporteDTO';
import { ItemNegociosRevisionDTO } from '../../dto/negocio/ItemNegociosRevisionDTO';

@Component({
  selector: 'app-negocios',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './negocios.component.html',
  styleUrl: './negocios.component.css'
})
export class NegociosComponent {

}
