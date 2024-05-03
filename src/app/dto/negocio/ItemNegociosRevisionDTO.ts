export class ItemNegociosRevisionDTO{
    constructor( 
        public nombre:string='',
        public descripcion:string='',
        public telefonos:string[],
        public listaImagenes:string[]
        //public direccion:Ubicacion,
       // public horarios: Horario[],
        //public tipoNegocio:CategoriaNegocio,
        
    ){}
}