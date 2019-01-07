import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/services.index';
import { Usuario } from 'src/app/models/usuario.models';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  usuario : Usuario;
  constructor(public _usuarioService:UsuarioService,private sanitize: DomSanitizer) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
    
  }

  sanitizr(url:string){
    return this.sanitize.bypassSecurityTrustUrl(url);
}
}
