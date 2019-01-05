import {Inject, Component, OnInit, ElementRef } from '@angular/core';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(  public _ajustes:SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }
   
  cambiarColor(color:string,link:any){
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(color);
  }

  aplicarCheck(link:any){
    let selectors:any = document.getElementsByClassName('selector');
    for (const ref of selectors) {
        ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  
  colocarCheck(){

    let tema = this._ajustes.ajustes.tema;
    let selectors:any = document.getElementsByClassName('selector');
    
    for (let ref of selectors){
      if(ref.getAttribute('data-theme')===tema){
        ref.classList.add('working');
        break;
      }
    }
  }

}
