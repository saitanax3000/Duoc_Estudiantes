import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConvertidorService {

  constructor() {

   }
  getDataEuro<T>() {
    const url = 'https://mindicador.cl/api/euro/2022';
    return fetch(url).then(res => res.json());
  }
  getDataDolar<T>(){
    const url = 'https://mindicador.cl/api/dolar/2022';
    return fetch(url).then(res => res.json());
  }

   // getArticleByCategory(dolar):Observable<any>{
    //return this.httpClient.get(
      //`${environment.url_base}`
    //)
   //}
}
