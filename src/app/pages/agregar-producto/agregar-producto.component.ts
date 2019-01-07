import { Component, OnInit, ɵConsole } from '@angular/core';
import { CategoriaService, ImagenService, ProductoService } from 'src/app/services/services.index';
import { Categoria } from 'src/app/models/categoria.models';
import { Producto } from 'src/app/models/producto.models';
import { Imagen } from 'src/app/models/imagen.models';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styles: []
})
export class AgregarProductoComponent implements OnInit {

  constructor(public _categoriaServ:CategoriaService,public _imagenService:ImagenService,public _productoService:ProductoService) { }

  producto:Producto;
  categoria:Categoria[]=[];
  imagen:Imagen;
  codigoCategoria:Categoria

  ngOnInit() {
    this.cargarCat();
  }

  print(codigo){
    this.codigoCategoria = codigo;
  }

  llenarProducto(nombre:string,descripcion:string,precio:number,f0:string,f1:string,f2:string,f3:string)
  {
       this.imagen = new Imagen(f0,f1,f2,f3);
      this._imagenService.agregarImagenes(this.imagen)
      .subscribe((res:any)=>{
      this.producto = new Producto(nombre,descripcion,precio,this.codigoCategoria,res.imagen.id,null,res.imagen._id);
       this._productoService.agregarProducto(this.producto)
     .subscribe(res=>console.log(res))
  })
  }

 



  cargarCat(){
    this._categoriaServ.cargarCategorias()
    .subscribe((res:any)=>{
        this.categoria = res;
    })
  }
}
