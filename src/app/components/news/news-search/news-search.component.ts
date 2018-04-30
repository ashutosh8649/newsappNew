import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../../../services/article.service'


@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.css'],
  providers:[ArticleService]

})
export class NewsSearchComponent implements OnInit {

	@Output() success = new EventEmitter<any>();


	public searchedText: string='';
	public newsList=[];

  constructor(private articleService : ArticleService) { }

  ngOnInit() {
  }

  // Function to get search text and make service call to get news from Api
  searchArticle() {
  	this.articleService.searchArticle(this.searchedText).subscribe((res) =>{
  	this.newsList = res.articles;
  	this.success.emit({
      'newsList': this.newsList
    });
  	}, (error) =>{

  	})
  }
}
