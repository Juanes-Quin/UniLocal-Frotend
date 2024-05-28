import { Horario } from "../../model/horario";
import { Ubicacion } from "../../model/ubicacion";

export class RegistroNegocioDTO{
    constructor(
        public nombre: string = '',
        public descripcion: string = '',
        public horarios: Horario[] = [],
        public telefono: string[] = [],
        public categoriaNegocio: string = '',
        public urlFoto: String[] = [],
        public ubicacion: Ubicacion = new Ubicacion(),
        public codigoPropietario: string = ''

    ){}
}
