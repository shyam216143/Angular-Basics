import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGENOTFOUNDComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [{ path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
{path: '**', component:PAGENOTFOUNDComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
