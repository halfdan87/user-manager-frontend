import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { LogoutPanelComponent } from './logout-panel/logout-panel.component';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    LogoutPanelComponent
  ]
})
export class AuthenticationModule { }
