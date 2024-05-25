export class RegistroAgendaDTO{
    constructor(
        public codigoCliente: string = '',
        public codigoNegocio: string = '',
        public tematica: string = '',
        public descripcion: string = '',
        public estadoAgenda: string = ''
    ) {}
}