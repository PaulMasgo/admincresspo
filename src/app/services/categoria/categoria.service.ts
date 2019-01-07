import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(public http:HttpClient) {

   }

   cargarCategorias(){
     let url = URL_SERVICIOS + '/categoria'
     return this.http.get(url);
   }
}
