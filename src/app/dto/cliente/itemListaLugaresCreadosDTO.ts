export class ItemListaLugaresCreadosDTO {
    constructor(
        public idNegocio: string = '',
        public nombre: string = '',
        public telefono: string = '', // Es una lista de telefonos, consultar
        public categoriaNegocio: string = '', // Es un atributo de tipo CategoriaNegocio, consultar
        public urlFoto: string = '' // Es una lista de String, consultar
    ) { }
}