import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { HomeComponent } from './components/home/home.component';
import { NocontactsComponent } from './components/nocontacts/nocontacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home/users/:userId',component:HomeComponent},
  {path:'home/nocontacts',component:NocontactsComponent},
  {path:'add',component:AddComponent},
  {path:"",redirectTo:"home/users/1",pathMatch:"full"},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule { }
