import { Horario } from "../Horario";
import { Ubicacion } from "../ubicacion";

export class RegistroNegocioDTO{
    constructor(
        public nombre: string ='',
        public descripcion:string='',
        public ubicacion: Ubicacion = new Ubicacion(),
        public horarios:Horario[] = [],
        public telefono:string[]= [],
        public categoriaNegocio:string='',
        public urlFoto:string[] = [],
        public codigoPropietario:string='',
    ){}
}
