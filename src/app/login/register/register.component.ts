import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as swal from 'sweetalert';
import { UsuarioService } from 'src/app/services/services.index';
import { Usuario } from '../../models/usuario.models';
import { Router } from '@angular/router';


declare function initPlugin();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls : ['../login.component.css']
})
export class RegisterComponent implements OnInit {

  forma:FormGroup;
  estado:boolean = true;
  contraseña:string;

  constructor(public _usuarioService:UsuarioService,
              public router:Router) { }

   Coinciden = (pass1,pass2)=>{
    if(pass1===pass2){
          console.log(pass2);
          this.estado = true ;
          this.contraseña = pass1; 
      }else{
        this.estado = false
      }
  }

  sonIguales(campo1,campo2){
    return( group:FormGroup)=>{
        let pass1 = group.controls[campo1].value;
        let pass2 = group.controls[campo2].value;
        if(pass1===pass2){
          return null;
        }
        
        return{
          sonIguales:true
        }
    }
  } 

  ngOnInit() {
    initPlugin();

    this.forma = new FormGroup({
         nombre: new FormControl(null,Validators.required),
         correo: new FormControl(null,[Validators.email,Validators.required]),
         contraseña1: new FormControl(null,Validators.required),
         contraseña2: new FormControl(null,Validators.required),
         condiciones: new FormControl(false)
    }, {validators: this.sonIguales('contraseña1','contraseña2')} );


   

  }

   
  
   


    registrarUsuario(){
    if(this.forma.invalid){
      swal('Importante','Las contraseñas no coinciden','warning');
      return;
    }
    if(!this.forma.value.condiciones){
      swal('Importante','Debe de aceptar las condiciones','warning');
    }
    
    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.contraseña1
    );

    this._usuarioService.crearUsuario(usuario)
    .subscribe(res=> this.router.navigate(['/login'])
    )

  }

}
