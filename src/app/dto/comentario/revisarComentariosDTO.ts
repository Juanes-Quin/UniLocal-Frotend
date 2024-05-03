export class RevisarComentariosDTO {
    constructor(
       public mensaje: string = '',
       public codigoUsuario: string = '',
       public nombreUsuario: string = '',
       public email: string = '',
       public fecha: Date // LocalDateTime  
    ) {}
}