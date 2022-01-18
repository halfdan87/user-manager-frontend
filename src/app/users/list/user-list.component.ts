import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { UserControllerService, UserDtoRes } from "../../../libs/api-client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(
    private userService : UserControllerService,
    private route : ActivatedRoute
  ) { }

  users !: UserDtoRes[];
  updatedUser !: number | null;

  ngOnInit(): void {
    this.userService.configuration.withCredentials = true;

    this.route.queryParams.subscribe(params => {
      this.updatedUser = +params['updatedUser'];
    });
    this.refreshUsers();
  }

  deleteUser(userId : number | undefined) {
    if (userId === undefined) {
      return;
    }
    this.updatedUser = null;
    this.userService.removeUserUsingDELETE(userId).subscribe(response => {
      this.refreshUsers();
    })
  }

  private refreshUsers() {
    this.userService.getAllUsersUsingGET().subscribe(
      response => {
        this.users = Array.from(response.values());
      }
    );
  }
}
