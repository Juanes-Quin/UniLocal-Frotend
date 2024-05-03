export class FavoritoDTO {
    constructor(
        public idNegocio: string = '',
        public idCliente: string = '',
        public urlFoto: string = '',
        public lugar: string = '' //Objeto de tipo Ubicación, consultar si se debe cambiar 
    ) {}
}