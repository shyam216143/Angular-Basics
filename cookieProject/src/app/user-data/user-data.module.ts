import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDataRoutingModule } from './user-data-routing.module';
import { UserDataComponent } from './user-data.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    UserDataComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserDataRoutingModule
  ]
})
export class UserDataModule { }
