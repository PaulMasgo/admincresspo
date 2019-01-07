import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../models/producto.models';


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

  agregarProducto(producto:Producto){
    let url = URL_SERVICIOS + '/producto'
    return this.http.post(url,producto);
  }

  Verproducto(id:string){
    let url = URL_SERVICIOS + `/producto/${id}`
    return this.http.get(url);
  }
}
