import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, AddComponent, NocontactsComponent } from '../career/components';

const routes: Routes = [
  {path: '', redirectTo: 'contacts/nocontacts', pathMatch: 'full'},
  {path: 'contacts/nocontacts', component: NocontactsComponent},
  {path: 'contacts', component: HomeComponent},
  {path: 'contacts/:userId', component: HomeComponent},
  {path: 'add', component: AddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule {
  static components = [ AddComponent, HomeComponent, NocontactsComponent ];
}
