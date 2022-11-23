import { Component, OnInit } from '@angular/core';
import { ConvertidorService } from '../../api/convertidor.service';

@Component({
  selector: 'app-coversor',
  templateUrl: './coversor.page.html',
  styleUrls: ['./coversor.page.scss'],
})
export class CoversorPage{
  pageTitle = 'conversor'
selectedCategory="euro"
topHeadlines = [];

  constructor(private articleService:ConvertidorService) {
    articleService.getTopHeadLines().subscribe((results) =>{
      console.log(results.dolar);
      this.topHeadlines = results.euro
    })
    articleService.getArticleByCategory('euro').subscribe((results) =>{
      //console.log(results);
    })
}
}