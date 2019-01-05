import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  menu:any =[
    {titulo:'Principal',
    icono:'mdi mdi-gaupe',
    submenu:[
      {titulo:'Dasboard',url:'/dashboard'},
      {titulo:'ProgressBar',url:'/progress'},
      {titulo:'Graficas',url:'/graficas1'},
    ]
    }
  ];


  constructor() { }
}
