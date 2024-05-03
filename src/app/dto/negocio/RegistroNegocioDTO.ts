export class RegistroNegocioDTO{
    constructor(
        public nombre: string='',
        public descripcion:string='',
        //public horarios:Horario[],
        public telefono:string[],
       // public categoriaNegocio:CategoriaNegocio,
        public urlFoto:string[],
        public longitud:string='',
        public latitud:string='',
        public codigoPropietario:string='',
    ){}
}