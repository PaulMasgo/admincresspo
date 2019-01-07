import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(public http:HttpClient) { }

  cargarProductos(desde:number){
    let url = URL_SERVICIOS + `/producto?desde=${desde}`
    return this.http.get(url);
  }

  buscarProductos(paramaetro:string){
    let url = URL_SERVICIOS + `/producto/buscar/${paramaetro}`
    return this.http.get(url);
  }
}
