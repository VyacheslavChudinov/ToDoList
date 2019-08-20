import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.less']
})
export class NewPostComponent implements OnInit {
  public isUserLoggedIn: boolean;

  public postModel = {
    content: "",
  }

  constructor(private router: Router, private news: NewsService, private auth: AuthService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.auth.isLoggedIn;
  }

  logout(){
    this.auth.loggedIn = false;
    this.isUserLoggedIn = false;
  }

  createNewsPost(form){
    event.preventDefault();
    const errors = [];
    const authorEmail = this.auth.userEmail;
    const content = form.content;

    if (!this.auth.isLoggedIn){
      errors.push('User is not logged in');            
    }

    if (errors.length === 0){
      let postedDate = Date.now();

      this.news.createNewsPost(content, postedDate, authorEmail).subscribe(data => {
        this.router.navigate(['home']);
      })
    }
  }

}
