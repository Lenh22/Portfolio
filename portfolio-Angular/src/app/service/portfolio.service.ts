import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) {}
    
  obtenerDatos():Observable<any>{
    //Llama al archivo creado para los datos
      return this.http.get('./assets/data/data.json');
    }


  }

