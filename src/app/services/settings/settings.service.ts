import { Injectable,Inject } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  ajustes:Ajustes ={
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default.css'
  }
  
  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarajustes();
   }

    guardarAjustes(){
      localStorage.setItem('ajustes',JSON.stringify(this.ajustes))
    }

    cargarajustes(){

      if(localStorage.getItem('ajustes')){
        this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
        this.aplicarTema(this.ajustes.tema);
      }else{
        this.aplicarTema(this.ajustes.tema);
      }
      
    }

    aplicarTema(color:string){
      let url = `assets/css/colors/${color}.css`
      this._document.getElementById('tema').setAttribute('href',url);

      this.ajustes.tema = color;
      this.ajustes.temaUrl = url;

      this.guardarAjustes();
    }

  }

  interface Ajustes{
    temaUrl:string,
    tema:string
  };
