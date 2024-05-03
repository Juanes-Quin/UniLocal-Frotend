export class ItemDetalleClienteDTO {
    constructor(
        public id: string = '',
        public nombre: string = '',
        public fotoPerfil: string = '',
        public email: string = '',
        public ciudadResidencia: string = ''    
    ) {}
}