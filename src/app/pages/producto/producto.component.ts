import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/services.index';
import { Producto } from 'src/app/models/producto.models';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos:Producto[]=[];
  desde:number = 0;
  registros :number = 0;
  cargando:boolean = true; 

  constructor(public service:ProductoService) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(){
      this.cargando= true;
      this.service.cargarProductos(this.desde)
      .subscribe((resp:any)=>{
        this.registros = resp.Total;
        this.productos = resp.Productos;
        this.cargando = false;
      })
  }

  paginar(numero:number){
    let desde = this.desde + numero;
    if(desde > this.registros){
      return;
    }
    if(desde <0 ){
      return;
    }
    this.desde +=numero;
    this.cargarProductos();
  }

  buscarUsuario(termino:string){

    if(termino.length <= 0){
      this.cargarProductos();
      return;
    }
    
    this.cargando = true;
    this.service.buscarProductos(termino)
    .subscribe((resp:any)=>{
      this.productos = resp.Productos;
      this.cargando = false;
    })
  }

}
