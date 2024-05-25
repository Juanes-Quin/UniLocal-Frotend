export class DetalleModeradorDTO{
    constructor(
        public id: string = '',
        public nombre: string = '',
        public fotoPerfil: string = '',
        public nickname: string = '',
        public email: string = '',
        public ciudadResidencia: string = ''
    ) {}
}