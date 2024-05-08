export class ProductoDTO {
    constructor(
        public codigo:string='',
        public nombre:string[]=[],
        public tipoProducto:string[]=[],
        public precio:string=''

    ){}

}