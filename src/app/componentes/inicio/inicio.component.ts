import { Component, OnInit } from '@angular/core';
import { MapaService } from '../../servicios/mapa.service';
import { Router, RouterModule } from '@angular/router';
import { ClienteService } from '../../servicios/cliente.service';
import { ItemListaLugaresCreadosDTO } from '../../dto/cliente/itemListaLugaresCreadosDTO';
import { PublicoService } from '../../servicios/publico.service';
import { ItemNegocioDTO } from '../../dto/negocio/item-negocio-dto';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule], //Siempre debe importarse cuando se usa routerLink
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent implements OnInit {

  negocios: ItemNegocioDTO[];

  constructor(private mapaService: MapaService, private router: Router, private clienteService: ClienteService, private publicoServicio: PublicoService) {

    this.negocios = [];


    this.publicoServicio.listarNegocios().subscribe({
      next: data => {
        this.negocios = data.respuesta;
        this.mapaService.pintarMarcadores(this.negocios);
      }
    })

  }

  ngOnInit(): void {
    this.mapaService.crearMapa();

  }

  public iraBusquedaNombre(valor:string){
    if(valor){
      this.router.navigate(["/busquedaNegocioNombre", valor]);
    }
  }

  public iraBusquedaCategoria(valor:string){
    if(valor){
      this.router.navigate(["/busquedaNegocioCategoria", valor]);
    }
  }

  public iraBusquedaEstado(valor:string){
    if(valor){
      this.router.navigate(["/busquedaNegocioEstado", valor]);
    }
  }

}
