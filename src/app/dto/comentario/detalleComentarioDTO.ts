export class DetalleComentarioDTO {
    constructor(
        public codigoComentario: string = '',
        public fecha: Date, // Atributo de tipo LocalDateTime
        public calificacion: string = '', // Dato tipo int
        public codigoCliente: string = '',
        public codigoNegocio: string = '',
        public mensaje: string = '',
        public respuesta: string = ''
    ) {} 
}