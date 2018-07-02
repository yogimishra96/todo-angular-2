import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form;
  dontShow = false;
  hide = true;
  email;
  password;

  constructor() { }

  ngOnInit() {

    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.minLength(8))
    });

    console.log(this.form);
  }

  getErrorMessage() {
    // this.dontShow = true;
    return this.form.email.hasError('required') ? 'You must enter a value' :
      this.form.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getPasswordError() {
    // this.dontShow = true;
    return this.form.password.hasError('required') ? 'You must enter a value' :
      this.form.password.hasError('email') ? 'Not a valid password' :
        '';
  }

  onSubmit(form) {
    // console.log('sdfdfg');
    console.log(form);
  }

}
