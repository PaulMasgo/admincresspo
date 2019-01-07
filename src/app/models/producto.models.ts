import { Imagen } from './imagen.models';
import { Categoria } from './categoria.models';

export class Producto {

    constructor(
        public nombre:string,
        public descripcion:string,
        public precio:string,
        public categoria:Categoria,
        public _id?:string,
        public estado?:boolean,
        public imagen?:Imagen
    ){
    
    }
}