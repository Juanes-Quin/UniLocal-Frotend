export class EmailArchivoDTO{
    constructor(
        public asunto: string = '',
        public cuerpo: string = '',
        public destinatario: string = '',
        public archivo: File
    ) {}
}