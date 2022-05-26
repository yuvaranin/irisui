import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginView = {
    forgotPassword: false,
    isSamlSso: false,
    layout: null,
    logo: "https://irisgbstorelocal1.blob.core.windows.net/public/default/logo/gearbox-logo.png",
    message: null,
    redirectLink: null,
    registrationLink: "/Register",
    returnUrl: "",
    samlSsoAction: null,
    samlSsoContent: null,
    samlSsoInputName: null,
    selfRegistration: false,
    supportEmail: "tamko.help@irisnow.com",
    welcomeMessage: "",
    errorMessage:false
  };
  isModal: boolean = false;
  copyrightYear = new Date();
  form = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  formSubmitted: boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }


  login(){
if(this.form.valid){
  this.formSubmitted = true;
if(this.form.value.user=='admin'&&this.form.value.password=='Password@1'){
localStorage.setItem('userAccess','admin');
this.router.navigate(['/Admin']);
}
else if(this.form.value.user=='vendor'&&this.form.value.password=='Password@1'){
  localStorage.setItem('userAccess','vendor');
  this.router.navigate(['/Vendor'])
}
else{
this.loginView.errorMessage=true;
  localStorage.setItem('userAccess','noAccess');
}
}

  }

  toggleForgotPassword() {
    this.loginView.forgotPassword = !this.loginView.forgotPassword;
    this.loginView.message = null;
  }
}
