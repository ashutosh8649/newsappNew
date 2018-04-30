import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-fav-article',
  templateUrl: './fav-article.component.html',
  styleUrls: ['./fav-article.component.css'],
  providers:[ArticleService]
})
export class FavArticleComponent implements OnInit {
	@Input() fav:any;
	@Output() success = new EventEmitter<any>();
  constructor(private articleService: ArticleService) { }

//removes favourite article
  removeFav(fav_id){
  	return this.articleService.removeFav(fav_id).subscribe(res=>{
  		this.success.emit();

  	},error=>{})

  }

  ngOnInit() {
  }

}
