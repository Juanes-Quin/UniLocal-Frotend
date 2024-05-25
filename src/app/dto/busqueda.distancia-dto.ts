import { Ubicacion } from "../model/ubicacion";

export class BusquedaDistanciaDTO{
    constructor(
        public ubicacion: Ubicacion =  new Ubicacion(),
        public distancia: number = 0.0
    ) {}
}