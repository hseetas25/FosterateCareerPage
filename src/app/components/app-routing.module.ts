import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from '../career/components/add/add.component';
import { HomeComponent } from '../career/components/home/home.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('../career/career-routing.module').then(m=>m.CareerRoutingModule)},
  {path:'home',component:HomeComponent},
  {path:'add',component:AddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
