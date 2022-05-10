import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  projectList:any;

  constructor(private datosPorfolio:PortfolioService) { }
  
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.projectList=data.project;
    })
}
}
