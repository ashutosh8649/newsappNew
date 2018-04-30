import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Api } from '../configs/api.config';
import { Json } from '../configs/json.config';

@Injectable()
export class ArticleService {

constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});
  public url="";
  public jsonUrl="";
  public news:any;
  private delUrl="";
  // Function to get search text and make service call to get news from Api
  searchArticle(searchedText) {

    this.url = Api.api + 'q=' +searchedText+'&'+'apiKey='+Api.apikey;
    return this.http.get(this.url)
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }
   private handleError(error: Response){
     return Observable.throw(error.statusText);
   }

   // Add favourite article to database
  addArticle(article) {
    return this.http.post(Json.baseUrl+"articles", article, {headers: this.headers})
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
  }

   showFav() {
      return this.http.get(Json.baseUrl+"db")
     .map(data => data.json(),
     (error: any)=>this.handleError(error));
     }

    removeFav(fav_id) {
      if(confirm("are you sure you want to remove this article?"))
      {
        this.delUrl=Json.baseUrl+"articles/"+fav_id;
        return this.http.delete(this.delUrl,{headers: this.headers})
       .map(data => data.json(),
       (error: any)=>this.handleError(error));
      }
  }

}
