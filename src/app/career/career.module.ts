import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerRoutingModule } from './career-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    CareerRoutingModule.components
  ],
  imports: [
    CommonModule,
    CareerRoutingModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
  ]
})
export class CareerModule { }
