import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFeedComponent } from './post-feed/post-feed.component';
import { UserDataComponent } from './user-data.component';

const routes: Routes = [
  { path: '', component: UserDataComponent },
  { path: 'post', component: PostFeedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDataRoutingModule { }
