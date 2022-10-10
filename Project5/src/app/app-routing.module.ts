import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGENOTFOUNDComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
{path: '', redirectTo:('user/login'), pathMatch:'full'},
  { path: '1', loadChildren: () => import('./user-data/user-data.module').then(m => m.UserDataModule) },
{path: '**', component:PAGENOTFOUNDComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
