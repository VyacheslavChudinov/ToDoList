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

  constructor(private news: NewsService, private auth: AuthService) { }

  ngOnInit() {
    this.updateNews();
  }

  updateNews(){
    this.news.getNews().subscribe((data) => {
      this.newsList = data;
    })
  }

  createNewsPost(event){
    event.preventDefault();
    const errors = [];
    const target = event.target;
    const authorEmail = this.auth.userEmail;
    const content = target.querySelector('#content').value;

    if (!this.auth.isLoggedIn){
      errors.push('User is not logged in');            
    }

    if (errors.length === 0){
      let postedDate = Date.now();

      this.news.createNewsPost(content, postedDate, authorEmail).subscribe(data => {
        this.updateNews();

        console.log(data);
      })
    }
  }



}
