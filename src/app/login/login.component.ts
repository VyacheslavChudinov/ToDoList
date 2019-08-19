import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;

    this.auth.loginUser(email, password).subscribe(data => {
      if (data.success){        
        this.auth.setUserEmail = email;
        this.auth.loggedIn = true;
        this.router.navigate(['home']);
      }
    });
    console.log(email, password);
  }

}
