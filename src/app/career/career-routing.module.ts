import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { HomeComponent } from './components/home/home.component';
import { NocontactsComponent } from './components/no-contacts/no-contacts.component';

const routes: Routes = [
  {path:"",redirectTo:"contacts/contact/1",pathMatch:"full"},
  {path:"contacts", component:HomeComponent},
  {path:'contacts/contact/:userId',component:HomeComponent},
  {path:'contacts/nocontacts',component:NocontactsComponent},
  {path:'add',component:AddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule { }
