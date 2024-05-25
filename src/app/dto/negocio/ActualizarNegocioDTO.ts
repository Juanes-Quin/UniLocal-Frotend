//mirar porque en la calse horario no hay nada
import { Horario } from "../../model/horario";

export class ActualizarNegocioDTO {
    constructor(
        public id:string='',
        public nombre:string='',
        public descripcion:string='',
        public horarios:Horario[] = [],
        public telefonos:string | string[] = [],
        public categoriaNegocio:string,
        public urlFoto:string='',
        public codigoCliente:string=''

    ){}

}
