import { Horario } from "../horario";

export class ActualizarNegocioDTO {
    constructor(
        public id:string='',
        public nombre:string='',
        public descripcion:string='',
        public horarios:Horario[],
        public telefonos:string[],
        public categoriaNegocio:string,
        public urlFoto:string='',
        public codigoCliente:string=''

    ){}

}