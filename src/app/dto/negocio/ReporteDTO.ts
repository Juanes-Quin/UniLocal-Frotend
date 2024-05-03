export class ReporteDTO{
    constructor(
        public codigoNegocio:string='',
        public nombreNegocio:string='',
        public fecha:Date,
        public numReservas:string=''
    ){}
}