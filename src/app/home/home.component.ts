import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public newsList: string[];
  public isUserLoggedIn: boolean;

  constructor(private news: NewsService, private auth: AuthService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.auth.isLoggedIn;
    this.updateNews();
  }

  updateNews(){
    this.news.getNews().subscribe((data) => {
      this.newsList = data;
    })
  }

  logout(){
    this.auth.loggedIn = false;
    this.isUserLoggedIn = false;
  }
}
