import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './detail.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule
  ],
  exports:[ProductDetailComponent]
})
export class ProductDetailModule { }
