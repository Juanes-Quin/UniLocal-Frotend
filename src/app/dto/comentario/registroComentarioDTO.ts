export class RegistroComentarioDTO {
    constructor(
        public calificacion: number = 0, // int
        public codigoCliente: string = '',
        public codigoNegocio: string = '',
        public mensaje: string = '',
    ) {}
}