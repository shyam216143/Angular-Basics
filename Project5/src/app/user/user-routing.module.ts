import { NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../shared/user-auth/auth-guard.guard';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { ErrorUserComponent } from './error-user/error-user.component';
import { PostFeedComponent } from './post-feed/post-feed.component';
import { UserForgotpasswordComponent } from './user-forgotpassword/user-forgotpassword.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserResetComponent } from './user-reset/user-reset.component';
import { UserComponent } from './user.component';

const routes: Routes = [
{ path: 'Admin', component: UserComponent, data:{"requiredAuth":true}, canActivate:[AuthGuardGuard]},
{path: 'login', component: UserLoginComponent,data:{"requiredAuth":false}, canActivate:[AuthGuardGuard]},
{path: '', redirectTo:('login'), pathMatch:'full'},
{path: 'register', component: UserRegisterComponent},
{path: 'profile', component: UserProfileComponent, data:{"requiredAuth":true}, canActivate:[AuthGuardGuard]},
{path: 'error', component: ErrorUserComponent},
{path: 'changepassword', component: ChangepasswordComponent, data:{"requiredAuth":true}, canActivate:[AuthGuardGuard]},
{path: 'logout', component: UserLogoutComponent},
{path: 'forgotpassword', component: UserForgotpasswordComponent},
{path: 'resetpassword/:uid/:token', component: UserResetComponent},
{path: 'post', component: PostFeedComponent},
{path: 'createpost', component: CreatepostComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { 
  register!:FormGroup
}
