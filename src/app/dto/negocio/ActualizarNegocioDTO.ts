

export class ActualizarNegocioDTO {
    constructor(
        public id:string='',
        public nombre:string='',
        public descripcion:string='',
        public horarios:string | string[] = [],
        public telefonos:string | string[] = [],
        public categoriaNegocio:string,
        public urlFoto:string='',
        public codigoCliente:string=''

    ){}

}
