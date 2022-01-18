import { Component, OnInit } from '@angular/core';
import {AuthenticationControllerService} from "../../../libs/api-client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout-panel',
  templateUrl: './logout-panel.component.html',
  styleUrls: ['./logout-panel.component.css']
})
export class LogoutPanelComponent implements OnInit {
  constructor(
    private authenticationController : AuthenticationControllerService,
    private _router : Router
  ) {
  }

  ngOnInit(): void {
  }

  get router(): Router {
    return this._router;
  }

  logout() {
    this.authenticationController.logoutUsingGET().subscribe(response => {
      this.router.navigate(['login']);
    });
  }
}
