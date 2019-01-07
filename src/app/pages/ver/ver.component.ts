import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/services.index';
import { Producto } from 'src/app/models/producto.models';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {
 
  id:string;
  producto:Producto;

  constructor(public route:ActivatedRoute,public _productoService:ProductoService) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.obtenerProducto();
  }

  obtenerProducto(){
    this._productoService.Verproducto(this.id)
    .subscribe((res:any)=>{
      this.producto = res 
    })
  }
  

}
