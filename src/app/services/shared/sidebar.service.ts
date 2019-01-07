import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  menu:any =[
    {titulo:'Principal',
    icono:'mdi mdi-gauge',
    submenu:[
      {titulo:'Dasboard',url:'/dashboard'},
      {titulo:'ProgressBar',url:'/progress'},
      {titulo:'Graficas',url:'/graficas1'},
      {titulo:'Promesas' ,url:'/promesas'},
      {titulo:'rxjs' ,url:'/rxjs'}
    ]
    },
    {
      titulo: 'Productos',
      icono:'mdi mdi-folder-lock-open',
      submenu:[ 
        {titulo:'Ver Productos',url:'/productos'},
        {titulo:'Agregar Producto',url:'/addProduct'}
      ]
    }
  ];


  constructor() { }
}
