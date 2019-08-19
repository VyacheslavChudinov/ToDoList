import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  loginUser(email, password){
    return this.http.post<registerResponse>('/api/login', {
      email,
      password
    }) 
  }

  registerUser(email, password){
    return this.http.post<registerResponse>('/api/register', {
      email,
      password
    }) 
  }
}
