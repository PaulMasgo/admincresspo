import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.models';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  usuario:Usuario;
  token:string='';

  constructor(public http:HttpClient,public router:Router) {
      this.cargarStorage();
   }


   estaLogeado(){
     if(this.token.length>5){
      return true
     }
      return false
   }

  cargarStorage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }else{
      this.token =''
      this.usuario = null
    }
  }  

  logout(){
     this.usuario = null,
     this.token = '',
      localStorage.removeItem('token')
      localStorage.removeItem('usuario')

      this.router.navigate(['/login']);
  }
   
   login(usuario:Usuario,recordar:boolean=false){
      
      if(recordar){
        localStorage.setItem('email',usuario.correo)
      }else{
        localStorage.removeItem('email');
      }

      let url = URL_SERVICIOS + '/login';
      return this.http.post(url,usuario)
      .pipe(map((resp:any)=>{
         
         localStorage.setItem('id',resp.id);
         localStorage.setItem('token',resp.token);
         localStorage.setItem('usuario',JSON.stringify(resp.usuario));
         
         this.usuario = resp.usuario;
         this.token = resp.token ;

         return true;
      }));
   }

   crearUsuario(Usuario:Usuario,recordar:boolean = false){
      let url = URL_SERVICIOS + '/usuario';
      return this.http.post(url,Usuario)
      .pipe(map((resp:any)=>{
        swal("Usuario Creado ", Usuario.nombre, "success");
        console.log(resp);
        return resp.usuario;
      }));
   };

  


}
