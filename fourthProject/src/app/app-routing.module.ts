import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { ClientComponent } from './client/client.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { ListContactComponent } from './contacts/list-contact/list-contact.component';
import { ViewContactComponent } from './contacts/view-contact/view-contact.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { LoansComponent } from './loans/loans.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'loans', component: LoansComponent },
  { path: 'loans/add-loan', component: AddLoansComponent, outlet: 'route1', children: [] },
  { path: 'loan-types', component: LoanTypesComponent },
  {
    path: 'contacts',
    children: [
      { path: 'view-contact', component: ViewContactComponent },
      { path: 'edit-contact', component: EditContactComponent },
      

    ]
  },
  {path: 'new-loans', redirectTo:'loans'},//redirect to loans 
  {path: '', redirectTo:'loans', pathMatch:'full'},//redirect to loans 
  { path: 'product1/1', component: Product1Component },
      { path: 'product2/2', component: Product2Component },
      { path: 'product/:id', component: ProductComponent },
      { path: 'product/:id/photos/:photoId', component: ProductComponent },
      { path: 'clients', component: ClientComponent },
      { path: 'search', component: SearchComponent },
      { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
