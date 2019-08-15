import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface userData {
  success: boolean,
  message: string,
}


interface registerResponse {
  success: boolean,
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value:boolean){
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(username, password){
    return this.http.post<userData>('/api/auth', {
      username,
      password
    }).subscribe(data => {
      console.log(data);
    })    
  }

  registerUser(username, password){
    return this.http.post<registerResponse>('/api/register', {
      username,
      password
    }) 
  }
}
