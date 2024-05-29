
import { Ubicacion } from "../../model/ubicacion";

export class DetalleNegocioDTO {
    constructor(
        public nombre: string = '',
        public descripcion: string = '',
        public telefonos: string | string[] = [],
        public ubicacion: Ubicacion = new Ubicacion(),
        public horarios: string | string[] = [],
        public categoriaNegocio: string = '',
        public listaImagenes: string = '',
        public calificaciones: number = 0
    ) {
    }
}