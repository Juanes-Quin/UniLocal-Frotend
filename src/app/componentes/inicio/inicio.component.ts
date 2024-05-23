import { Component } from '@angular/core';
//import { MapaService } from '../../servicios/mapa.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [], //Siempre debe importarse cuando se usa routerLink
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  //private mapaService: MapaService
  constructor() { }

  ngOnInit(): void {
    //this.mapaService.crearMapa();
  }
}
