import { Ubicacion } from "../../model/ubicacion";

export class FavoritoDTO {
    constructor(
        public idNegocio: string = '',
        public idCliente: string = '',
        public urlFoto: string = '',
        public ubicacion: Ubicacion = new Ubicacion()
    ) {}
}