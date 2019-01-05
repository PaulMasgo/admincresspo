import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import {retry} from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {

    
  }

  ngOnInit() {

    this.regresaobservable().pipe(
      retry(2)
    )
    .subscribe(
      numero=> console.log('Subs',numero),
      err => console.log('error',err),
       
    );

  }

  regresaobservable(){
    
    return new Observable(observer =>{
      let contador = 0;
      let intevalo = setInterval(()=>{
        contador++;
        observer.next(contador);
        
        if(contador==3){
          clearInterval(intevalo);
          observer.complete();
        }
        if(contador===2){
          //clearInterval(intevalo);
          observer.error('Auxilio');
        }

      },1000);
    });

  }

}
