import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  signInForm : FormGroup;
  SignUpForm : FormGroup;
  dontShow = false;
  hide = true;
  email;
  password;
  hide_p = true ;
  // firstname;
  // lastname;

  constructor(private fb: FormBuilder) {
    this.signIn();
    this.signUp();
  }

  ngOnInit() {
  }

  signIn(){
    this.signInForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.minLength(8))
    });
  }


  signUp(){
    // console.log(this.fb);
    this.SignUpForm = this.fb.group({
      name : new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPass: new FormControl('', Validators.required)
    },{validator: this.checkIfMatchingPasswords('password', 'confirmPass')});

    // console.log(this.form);
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }


  signInEmailError() {
    // this.dontShow = true;
    return this.signInForm.controls.email.hasError('required') ? 'Please Enter the email' :
      this.signInForm.controls.email.hasError('email') ? 'Please enter valid email address' : 'done';
    // return form.controls.email.errors.hasError('required') ? 'You must enter a value' :
    //   this.form.email.hasError('email') ? 'Not a valid email' :
    //     '';
  }

  signInPasswordError() {
    return this.signInForm.controls.password.hasError('required') ? 'Please enter the password' :
      this.signInForm.controls.password.hasError('minLength') ? '' : 'Minimum password length should be 8';
  }

  signUpNameError() {

    return this.SignUpForm.controls.name.hasError('required') ? 'Please Enter your good name' : '';
  }

  signUpEmailError() {
    // this.dontShow = true;
    return this.SignUpForm.controls.email.hasError('required') ? 'Please Enter the email' :
      this.SignUpForm.controls.email.hasError('email') ? 'Please enter valid email address' : 'done';
    // return form.controls.email.errors.hasError('required') ? 'You must enter a value' :
    //   this.form.email.hasError('email') ? 'Not a valid email' :
    //     '';
  }

  signUpPasswordError() {
    // this.dontShow = true;
    // console.log(this.form.controls.password.hasError('minLength') ? 'yes' : 'no';
    return this.SignUpForm.controls.password.hasError('required') ? 'Please enter the password' :
      this.SignUpForm.controls.password.hasError('minLength') ? '' : 'Minimum password length should be 8';
  }

  signUpConfirmPasswordError() {
    // console.log();

    if(this.SignUpForm.controls.confirmPass.hasError('required') ){
      return 'Please enter the same password';
    }
    // else if(!this.SignUpForm.controls.confirmPass.hasError('minLength')) {
    //   // return 'Minimum password length should be 8 ';
    //   console.log('dsdsd');
    // }
    else if(this.SignUpForm.controls.confirmPass.hasError('notEquivalent') ){
      return 'Password don\'t  match ';
    }

    // return this.SignUpForm.controls.confirmPass.hasError('required') ? 'Please enter the same password' :
    //
    //     ? this.SignUpForm.controls.confirmPass.hasError('notEquivalent') ?
    //     'match nahi hai' : 'match hua' : ;
    //

  }


  onSubmit(form) {
    // console.log('sdfdfg');
    console.log(form);
  }

}
