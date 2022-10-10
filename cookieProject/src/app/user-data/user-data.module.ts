import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDataRoutingModule } from './user-data-routing.module';
import { UserDataComponent } from './user-data.component';
<<<<<<< HEAD
=======
import { LoginComponent } from './login/login.component';
>>>>>>> 1c38c9ec36559db70d838ca8024739be28396526


@NgModule({
  declarations: [
<<<<<<< HEAD
    UserDataComponent
=======
    UserDataComponent,
    LoginComponent
>>>>>>> 1c38c9ec36559db70d838ca8024739be28396526
  ],
  imports: [
    CommonModule,
    UserDataRoutingModule
  ]
})
export class UserDataModule { }
