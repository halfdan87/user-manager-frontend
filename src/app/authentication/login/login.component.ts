import { Component, OnInit } from '@angular/core';
import {AuthenticationControllerService, LoginDto} from "../../../libs/api-client";
import {Router} from "@angular/router";
import {HttpContext} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDto: LoginDto = {username: '', password: ''};

  constructor(
    private authenticationController : AuthenticationControllerService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.authenticationController.configuration.withCredentials = true;
  }

  login() {
    this.authenticationController.authenticateUserUsingPOST(
      this.loginDto
    )
      .subscribe(response => {
      this.router.navigate(['list']);
    });
  }
}
