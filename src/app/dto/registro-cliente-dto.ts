export class RegistroClienteDTO {
    constructor(
        public nombre: string = '',
        public fotoPerfil: string = '',
        public ciudadResidencia: string = '',
        public nickname: string = '',
        public email: string = '',
        public password: string = '',
        public confirmaPassword: string = '', 
    ) { }
}
