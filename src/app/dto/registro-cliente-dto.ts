export class RegistroClienteDTO {
    constructor(
        public nombre: String = '',
        public fotoPerfil: String = '',
        public ciudadResidencia: String = '',
        public nickname: String = '',
        public email: String = '',
        public password: String = '',
        public confirmaPassword: String = '', // consultar si debe estar también el backend
    ) { }
}
