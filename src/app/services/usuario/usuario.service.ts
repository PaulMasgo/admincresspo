import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.models';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http:HttpClient) {
    console.log('Servicio listo para usarse');
   }

   login(usuario:Usuario,recordar:boolean=false){
      
      if(recordar){
        localStorage.setItem('email',usuario.correo)
      }else{
        localStorage.removeItem('email');
      }

      let url =URL_SERVICIOS + '/login';
      return this.http.post(url,usuario)
      .pipe(map((resp:any)=>{
         
         localStorage.setItem('id',resp.id);
         localStorage.setItem('token',resp.token);
         localStorage.setItem('usuario',JSON.stringify(resp.usuario));
        
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
