export class ReporteDTO{
    constructor(
        public codigoPropietario: string = '',
        public codigoNegocio:string='',
        public nombreNegocio:string='',
        public numReservas:string=''
    ){}
}