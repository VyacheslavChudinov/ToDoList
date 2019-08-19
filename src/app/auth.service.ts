import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface registerResponse {
  success: boolean,
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus: boolean = false;
  private currentUserEmail: string;

  constructor(private http: HttpClient) { }

  set loggedIn(value){
    this.loggedInStatus = value;  
  }  

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  set setUserEmail(email){
    this.currentUserEmail = email;
  }

  get userEmail(){
    return this.currentUserEmail;
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
