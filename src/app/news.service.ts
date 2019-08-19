import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface newsData {
  content: String,
  likes: {type: Number, default: 0 },
  postedDate: Date,
  authorEmail: String
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(){
    return this.http.get<string[]>('/api/news', {});
  }

  createNewsPost(content, postedDate, authorEmail){
    return this.http.post<newsData>('/api/news', {
      content,
      postedDate,
      authorEmail
    });
  }
}
