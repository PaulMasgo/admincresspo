import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Imagen } from 'src/app/models/imagen.models';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(public http:HttpClient) { }

  agregarImagenes(imagen:Imagen){
    let url = URL_SERVICIOS + '/imagen';
    return this.http.post(url,imagen);
  }
}
