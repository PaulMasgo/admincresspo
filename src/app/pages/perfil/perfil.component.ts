import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.models';
import { UsuarioService } from 'src/app/services/services.index';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {

  usuario:Usuario;
  constructor(public _usuarioService:UsuarioService) { 
    this.usuario = this._usuarioService.usuario;
  }


  ngOnInit() {
  }

}
