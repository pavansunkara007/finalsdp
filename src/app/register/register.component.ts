import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide=true
  registerUserData = { username: "", email: "", password: "",phone: "" }
  
  registerData={
    // username:new FormControl('',[Validators.required,Validators.minLength(2)]),
    username:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    phone: new FormControl('',[Validators.required,Validators.maxLength(10)])

  }
  getErrorMessage() {
    if (this.registerData.email.hasError('required')) {
      return 'Email is required';
    }
    else if(this.registerData.email.hasError('email')){
      return 'Email must be a valid email Address';
    }
  }
  getError(){
    if (this.registerData.password.hasError('required')) {
      return 'Password is required';
    }
    else if(this.registerData.password.hasError('minlength')){
      return 'Password must be a minimum length of 6';
    }
  }
  getMessage(){
    if (this.registerData.username.hasError('required')) {
      return 'Name is required';
    }
    else if(this.registerData.username.hasError('minlength')){
      return 'Name must be a minimum length of 2';
    }
  }
  getMessage1(){
    if (this.registerData.phone.hasError('required')) {
      return 'Name is required';
    }
    else if(this.registerData.phone.hasError('maxlength')){
      return 'Name must be a maximum length of 10';
    }
    
}
constructor(private _auth: AuthService,
  private _router: Router,private snackbar:MatSnackBar) { }

ngOnInit() {
}

registerUser() {
this.registerUserData.email=this.registerData.email.value;
this.registerUserData.username=this.registerData.username.value;
this.registerUserData.password=this.registerData.password.value;
this.registerUserData.phone=this.registerData.phone.value;

this._auth.registerUser(this.registerUserData)
.subscribe(
res => {
this.snackbar.open('USER REGISTERED SUCCESSFULL', 'OK', {
duration: 3000,
});
localStorage.setItem('token', res.token)
this._router.navigate(['/user'])
},
err => {
if( err instanceof HttpErrorResponse ) {
if (err.status === 409) {
this.snackbar.open('EMAIL ALREADY REGISTERED', 'OK', {
  duration: 3000,
});
this.registerData.email.reset();
this.registerData.username.reset();
this.registerData.password.reset();
this.registerData.phone.reset();
this.registerUserData.username="";
this.registerUserData.email="";
this.registerUserData.password="";
this.registerUserData.phone="";
}
}
}
)      
}
}