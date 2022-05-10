import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  miPorfolio:any;

  //Llamo desde service
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    //Y aca llamo a la funcion q esta en service
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      //Muesta el archivo data.json
      //console.log(data);
      this.miPorfolio=data;
    });
  }
}
