import { NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ErrorUserComponent } from './error-user/error-user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserComponent } from './user.component';

const routes: Routes = [{ path: 'Admin', component: UserComponent },
{path: 'login', component: UserLoginComponent},
{path: '', redirectTo:('login'), pathMatch:'full'},
{path: 'register', component: UserRegisterComponent},
{path: 'error', component: ErrorUserComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { 
  register!:FormGroup
}
``