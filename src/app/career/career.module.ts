import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerRoutingModule } from './career-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { HomeComponent, AddComponent, NocontactsComponent } from './components';

@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    NocontactsComponent,
  ],
  imports: [
    CommonModule,
    CareerRoutingModule,
    ReactiveFormsModule
  ]
})
export class CareerModule { }
