import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDataRoutingModule } from './user-data-routing.module';
import { UserDataComponent } from './user-data.component';
import { PostFeedComponent } from './post-feed/post-feed.component';
import { CreatepostComponent } from './createpost/createpost.component';


@NgModule({
  declarations: [
    UserDataComponent,
    PostFeedComponent,
    CreatepostComponent
  ],
  imports: [
    CommonModule,
    UserDataRoutingModule
  ]
})
export class UserDataModule { }
