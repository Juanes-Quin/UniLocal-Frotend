export class EmailDTO {
    constructor(
        public asunto: string = '',
        public cuerpo: string = '',
        public destinatario: string = '' 
    ) { }
}
