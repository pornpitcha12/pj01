import { Component } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  username: string;
  password: string;
  user = '';

  constructor(private router: Router, private http:HttpClient) {
  }
  
  checkLogin() {
    const body = {"username": this.username, "password": this.password};
    const data = JSON.stringify(body);
    this.http.post('http://localhost:3000/login', data, this.httpOptions).subscribe((res: any) => {
      console.log(res.role)
      if(res.role == 'admin') {
        this.router.navigate(['./home']);
      }
      else if (res.role == 'user') {
        this.router.navigate(['./home-user']);
      }

    },
    (err) => {
      console.log(err)
    })
  }

  // public onLoginClick() {
  //     this.router.navigate(['./home']);
  // }
}
