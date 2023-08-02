import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

const routes: Routes = [
  {
    path:'',
    component:ProductItemComponent
  }
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [ProductItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[ProductItemComponent]
})
export class ProductItemModule { }
