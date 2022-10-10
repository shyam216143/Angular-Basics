import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ExampleComponent } from './example/example.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {path:'', component:HomeComponent},
<<<<<<< HEAD
  {path:'example', component:ExampleComponent}  ,
  {path:'auth', component:AuthenticationComponent},
  { path: 'user_data', loadChildren: () => import('./user-data/user-data.module').then(m => m.UserDataModule) }
=======
  { path: 'user-data', loadChildren: () => import('./user-data/user-data.module').then(m => m.UserDataModule) }
>>>>>>> 1c38c9ec36559db70d838ca8024739be28396526
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
