import { Component, Input } from '@angular/core';
import { Alerta } from '../../model/alerta';

@Component({
  selector: 'app-alerta',
  standalone: true,
  imports: [],
  templateUrl: './alerta.component.html',
  styleUrl: './alerta.component.css'
  })

  export class AlertaComponent {
  @Input() alerta!: Alerta | null;
  public ocultar() {
  this.alerta = null;
  }
  }

