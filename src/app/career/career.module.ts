import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerRoutingModule } from './career-routing.module';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CareerRoutingModule.components
  ],
  imports: [
    CommonModule,
    CareerRoutingModule,
    ReactiveFormsModule
  ]
})
export class CareerModule { }
