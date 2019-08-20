import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {   
  public registerForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
  });

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser() { 
    const errors = [];
    const registerModel = this.registerForm.value;

    if (registerModel.password !== registerModel.confirmPassword){
      errors.push('Password do not match');
    }

    if (errors.length === 0){
      this.auth.registerUser(registerModel.email, registerModel.password).subscribe(data => {
        console.log(data);

        if (data.success) { 
          this.auth.loginUser(registerModel.email, registerModel.password).subscribe(data => {
            if (data.success){        
              this.auth.setUserEmail = registerModel.email;
              this.auth.loggedIn = true;
              this.router.navigate(['home']);
            }
          });
        }
      })
    }
  }
}
