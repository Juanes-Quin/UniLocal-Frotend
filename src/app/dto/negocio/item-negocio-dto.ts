import { Ubicacion } from "../../model/ubicacion";

export class ItemNegocioDTO {

  constructor(
    public codigoNegocio: string = '',
    public nombre: string = '',
    public imagenDestacada: string = '',
    public categoriaNegocio: string = '',
    public ubicacion: Ubicacion = new Ubicacion(),
    public calificacionPromedio: number = 0,
    public estadoNegocio:string = ''
    ){}

}
