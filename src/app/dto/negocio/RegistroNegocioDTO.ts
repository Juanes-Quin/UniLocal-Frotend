import { Horario } from "../Horario";
import { Ubicacion } from "../ubicacion";

export class RegistroNegocioDTO{
    constructor(
        public nombre: string = '',
        public descripcion: string = '',
        public codigoCliente: string = '',
        public ubicacion: Ubicacion = new Ubicacion(),
        public urlFoto: string[] = [],
        public categoriaNegocio: string = '',
        public horarios: Horario[] = [],
        public telefono: string[] = [],
        public codigoPropietario: string = ''

    ){}
}
