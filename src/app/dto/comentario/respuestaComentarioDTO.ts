export class RespuestaComentarioDTO {
    constructor(
        public codigoComentario: string = '',
        public codigoClienteReceptor: string = '',
        public codigoNegocio: string = '',
        public respuesta: string = '' 
    ) {}
}