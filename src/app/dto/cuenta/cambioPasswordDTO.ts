export class CambioPasswordDTO{
    constructor(
        public id: string = '',
        public passwordNueva: string = '',
        public email: string = '',
        public token: string = '',
    ) {}
}