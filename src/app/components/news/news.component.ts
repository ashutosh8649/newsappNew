import { Component, OnInit } from '@angular/core';
//import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
	public news =[];

  constructor() { }

  ngOnInit() {
  }

    // Update news list based on search text
  setNewslist(event) {
  	this.news = event.newsList;
  }

}
