import { Component, OnInit } from '@angular/core';
import {UserControllerService, UserDtoReq, UserDtoRes} from "../../../libs/api-client";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private route : ActivatedRoute,
              private router : Router,
              private userService : UserControllerService) { }

  userId !: number;
  serverError!: any;

  user : UserDtoReq = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  };

  ngOnInit(): void {
    this.userService.configuration.withCredentials = true;

    this.route.queryParams.subscribe(
      params => {
        this.userId = params['userId'];
        if (this.userId !== undefined) {
          this.userService.getUserUsingGET(this.userId).subscribe(
            response => {
              this.user = this.mapToReq(response);
            },
            error => {
              this.handleError(error);
            });
        }
      });
  }

  onSubmit() {
    if (this.userId !== undefined) {
      this.userService.updateUserUsingPUT(this.userId, this.user)
        .subscribe(
          response => {
          this.router.navigate(
            ['list'],
            {queryParams: {updatedUser: this.userId}});
        },
          error => {
            this.handleError(error);
        });
    } else {
      this.userService.addUserUsingPOST(this.user)
        .subscribe(response => {
          this.router.navigate(['list']);
        },
        error => {
          this.handleError(error);
        });
    }
  }

  private handleError(error : any) {
    if (error.status === 401) {
      this.router.navigate(['login']);
    } else {
      this.serverError = error.status;
    }
  }

// The admin can reset the user's password, but the public API does not return the password.
  // So request is different than response, hence this mapping.
  // It could have been simpler, but I wanted to have some fun with the design...
  private mapToReq(userRes : UserDtoRes) {
    return {
      birthDate : userRes.birthDate,
      email : userRes.email,
      firstName : userRes.firstName,
      userId : this.userId,
      lastName : userRes.lastName,
      username : userRes.username,
      password : ''
    };
  }
}
