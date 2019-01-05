import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda:String = 'Leyenda';
  @Input() porcentaje :number = 50;
  
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('leyenda ', this.leyenda);
    console.log('progreso ',this.porcentaje);
   }

  ngOnInit() {
  }

  incrementar(valor){
    if(this.porcentaje == 100){
      alert('llegaste al limite');
    }else{
      this.porcentaje = this.porcentaje + valor;
      this.cambioValor.emit(this.porcentaje);
    }
  }

  disminuir(valor){
    if(this.porcentaje == 0){
      alert('llegste al limite');
    }else{
      this.porcentaje = this.porcentaje - valor;
      this.cambioValor.emit(this.porcentaje);
    }
  }

}
