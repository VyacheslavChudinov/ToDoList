import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public newsList: string[];

  constructor(private news: NewsService) { }

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
    const content = target.querySelector('#content').value;

    if (errors.length === 0){
      this.news.createNewsPost(content).subscribe(data => {
        this.updateNews();

        console.log(data);
      })
    }
  }



}
