import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { FavnewsComponent } from './components/favnews/favnews.component';
import { FavArticleComponent } from './components/favnews/fav-article/fav-article.component';
import { NewsSearchComponent } from './components/news/news-search/news-search.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';
import { ArticleComponent } from './components/news/news-list/article/article.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ArticleService } from './services/article.service';

const routes :Routes = [
  {path: '', redirectTo:'/news',pathMatch:'full'},
  {path: 'news', component:NewsComponent},
  {path: 'favourites', component:FavnewsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    FavnewsComponent,
    FavArticleComponent,
    NewsSearchComponent,
    NewsListComponent,
    ArticleComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [ArticleService]
})
export class AppModule { }
