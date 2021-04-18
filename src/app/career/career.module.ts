import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerRoutingModule } from './career-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { HomeComponent, AddComponent, PageNotFoundComponent, NocontactsComponent } from './components';

@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    PageNotFoundComponent,
    NocontactsComponent,
  ],
  imports: [
    CommonModule,
    CareerRoutingModule,
    ReactiveFormsModule
  ]
})
export class CareerModule { }
