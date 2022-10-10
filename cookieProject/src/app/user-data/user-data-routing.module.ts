import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDataComponent } from './user-data.component';

<<<<<<< HEAD
const routes: Routes = [{ path: '', component: UserDataComponent }];
=======
const routes: Routes = [
  { path: '', component: UserDataComponent }];
>>>>>>> 1c38c9ec36559db70d838ca8024739be28396526

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDataRoutingModule { }
