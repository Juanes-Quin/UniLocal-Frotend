export class DetalleReservaDTO {
    constructor(
        public codigoCliente: string = '',
        public codigoNegocio: string = '',
        public cantidadPersonas: number = 0 
    ) { }
}
