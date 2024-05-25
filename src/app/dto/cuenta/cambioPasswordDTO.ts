export class CambioPasswordDTO{
    constructor(
        public idCuenta: string = '',
        public passwordNueva: string = '',
        public email: string = '',
        public token: string = '',
    ) {}
}