import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(event) {
    event.preventDefault();
    const errors = [];
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    const confirmPassword = target.querySelector('#confirmPassword').value;

    if (password !== confirmPassword){
      errors.push('Password do not match');
    }

    if (errors.length === 0){
      this.auth.registerUser(username, password).subscribe(data => {
        console.log(data);

        if (data.success) { 
          this.router.navigate(['home']);
        }
      })
    }

    console.log(username, password);
  }

}
