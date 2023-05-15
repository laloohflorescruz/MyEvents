import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

userName: any;
password: any;

  constructor(private authService: AuthService,
    private router: Router) {
  }



  ngOnInit() {
  }

  
  login(formValues: any) {
    this.authService.loginUSer(formValues.userName,
       formValues.password)
       this.router.navigate(['events'])
  }

  
  cancel() { 
    this.router.navigate(['events'])
  }
  
}
