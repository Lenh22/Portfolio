import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';


@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

  expList:any;
  homeworkList:any;

  constructor(private datosPorfolio:PortfolioService){}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.expList=data.exp;
      this.homeworkList=data.jobHomework;
    })
  }

}
