import { Component, OnInit } from '@angular/core';
import { MapaService } from '../../servicios/mapa.service';
import { Router, RouterModule } from '@angular/router';
import { RegistroNegocioDTO } from '../../dto/negocio/RegistroNegocioDTO';
import { NegociosService } from '../../servicios/negocios.service';
//import { MapaService } from '../../servicios/mapa.service';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule], //Siempre debe importarse cuando se usa routerLink
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent implements OnInit {
  registroNegocioDTO: RegistroNegocioDTO;

  constructor(private mapaService: MapaService, private router: Router, private negociosService: NegociosService) { 
    this.registroNegocioDTO = new RegistroNegocioDTO();
  }
  
  ngOnInit(): void {
    this.mapaService.crearMapa();

    this.mapaService.agregarMarcador().subscribe((marcador) => {
      this.registroNegocioDTO.ubicacion.latitud = marcador.lat;
      this.registroNegocioDTO.ubicacion.longitud = marcador.lng;
    });
  }
}
