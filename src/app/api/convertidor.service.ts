import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConvertidorService {

  constructor(private httpClient:HttpClient) {

   }

   getLista():Observable<any>{
    return this.httpClient.get(
      `${environment.url_base}`
    )
   }

   // getArticleByCategory(dolar):Observable<any>{
    //return this.httpClient.get(
      //`${environment.url_base}`
    //)
   //}
}
