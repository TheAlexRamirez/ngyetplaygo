// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../user.service';


@Component({
  templateUrl: 'login.component.html',
  styleUrls : ['login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router,public fb: FormBuilder) {}

  public loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  doLogin(event){
    // Grab the values of the controls:
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;

    this.onSubmit(email,password);

  }

  onSubmit(email, password) {
    console.log(this.loginForm.value);

    this.userService.login(email, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['']);
      }
    });
  }
}
