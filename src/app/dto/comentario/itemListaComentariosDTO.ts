export class ItemListaComentariosDTO {
    constructor(
        public id: string = '',
        public fecha: Date, // LocalDateTime
        public mensaje: string = ''
    ) {}
}