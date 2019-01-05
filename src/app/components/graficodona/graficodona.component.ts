import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styleUrls: ['./graficodona.component.css']
})
export class GraficodonaComponent implements OnInit {

 
  @Input('nombres') public doughnutChartLabels:string[]; 
  @Input('data') public doughnutChartData:number[] ;
  @Input('tipo') public doughnutChartType:string ;

  constructor() { }

  ngOnInit() {
  }

}
