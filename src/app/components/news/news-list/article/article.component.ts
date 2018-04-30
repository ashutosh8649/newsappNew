import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../../../../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[ArticleService]

})
export class ArticleComponent implements OnInit {

	
  @Input() article: any;//article is an object inside articles[] inside json data sent by api

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  addArticle(article) {
  	this.articleService.addArticle(article).subscribe((res) =>{
  		alert("article added to favourite list successfully")
  	}, (error) =>{

  	})
  }


  hello(){
    return "hi"
  }
}

