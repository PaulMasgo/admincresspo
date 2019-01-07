export class Usuario {

    constructor(
        public nombre:string,
        public correo:string,
        public password:string,
        public _id?:string,
        public google?:boolean,
        public tipo?:string,
        public estado?:boolean,
        public imagen?:string ,
    ){
    
    }
}