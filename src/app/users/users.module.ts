import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './list/user-list.component';
import { UserEditComponent } from './edit/user-edit.component';
import { RouterModule } from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class UsersModule { }
