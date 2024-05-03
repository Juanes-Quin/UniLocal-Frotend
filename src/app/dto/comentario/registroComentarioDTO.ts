export class RegistroComentarioDTO {
    constructor(
        public fecha: Date, // LocalDateTime
        public calificacion: string = '', // int
        public codigoCliente: string = '',
        public codigoNegocio: string = '',
        public mensaje: string = '',
        public respuesta: string = ''
    ) {}
}