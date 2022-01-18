import { Component } from '@angular/core';
import {AuthenticationControllerService, UserControllerService} from "../libs/api-client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-manager-frontend';
}
