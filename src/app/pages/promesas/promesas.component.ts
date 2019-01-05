import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
  
    this.contar3().then((res)=> console.log(res)).catch((err)=> console.log(err))
   
  }

  ngOnInit() {
  }

contar3(){

    return new Promise((resolv,reject)=>{
    let contador = 0 ;

    let intevalo = setInterval(()=>{
    contador ++;
    console.log(contador);

    if(contador===3){
          resolv('ok');
          clearInterval(intevalo)
    }
  },1000);
});

}


}
