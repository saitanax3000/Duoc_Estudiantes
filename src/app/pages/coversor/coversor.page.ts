import { Component, OnInit } from '@angular/core';
import { ConvertidorService } from '../../api/convertidor.service';

@Component({
  selector: 'app-coversor',
  templateUrl: './coversor.page.html',
  styleUrls: ['./coversor.page.scss'],
})
export class CoversorPage{
  pageTitle = 'conversor'
  selectedCategory=""
  lista = [];

  constructor(private articleService:ConvertidorService) {
    articleService.getLista().subscribe((results) =>{
      console.log(results);
      this.lista = results.data
    })
    //articleService.getArticleByCategory('euro').subscribe((results) =>{
      //console.log(results);
    //})
}
}