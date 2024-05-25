export class ItemListaLugaresCreadosDTO {
    constructor(
        public idNegocio: string = '',
        public nombre: string = '',
        public telefono: string | string[] = [], 
        public categoriaNegocio: string = '', 
        public urlFoto: string | string[] = []
    ) { }
}