import { Horario } from "../Horario";
import { Ubicacion } from "../ubicacion";

export class ItemNegociosRevisionDTO{
    constructor( 
        public nombre:string='',
        public descripcion:string='',
        public telefonos:string[],
        public ubicacion:Ubicacion = new Ubicacion(),
        public horarios:Horario[],
        public tipoNegocio:string='',
        public listaImagenes:string[]
    ){}
}