export class DetalleReservaDTO {
    constructor(
        public fecha: Date ,
        public hora: string='' ,
        public cantidadPersonas: string = '' ,
        public codigoCliente: string = '',
        public codigoNegocio: string = '',
    ) { }
}
