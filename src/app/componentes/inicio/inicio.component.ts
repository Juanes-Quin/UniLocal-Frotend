import { Component, OnInit } from '@angular/core';
import { MapaService } from '../../servicios/mapa.service';
import { Router, RouterModule } from '@angular/router';
import { ClienteService } from '../../servicios/cliente.service';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule], //Siempre debe importarse cuando se usa routerLink
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent implements OnInit {

  constructor(private mapaService: MapaService, private router: Router, private clienteService: ClienteService) { 
    
  }
  
  ngOnInit(): void {
    this.mapaService.crearMapa();

  }

  public iraBusqueda(valor:string){
    if(valor){
      this.router.navigate(["/busqueda", valor]);
    }
  }
}
