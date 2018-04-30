import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service'


@Component({
  selector: 'app-favnews',
  templateUrl: './favnews.component.html',
  styleUrls: ['./favnews.component.css'],
  providers:[ArticleService]
})
export class FavnewsComponent implements OnInit {

	public favList;

  constructor(private articleService : ArticleService) { }

  ngOnInit() {

    this.showFav();
  }

    showFav() {
  	this.articleService.showFav().subscribe((res) =>{
  	this.favList = res.articles;
  	}, (error) =>{

  	})
  }

  afterRemove(){
    this.ngOnInit();
  }
}
