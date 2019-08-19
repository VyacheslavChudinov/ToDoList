import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface newsData {
  content: String,
  likes: {type: Number, default: 0 },
  //postedDate: {type: Date, default: Date.now};
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(){
    return this.http.get<string[]>('/api/news', {});
  }

  createNewsPost(content){
    return this.http.post<newsData>('/api/news', {
      content
    });
  }
}
