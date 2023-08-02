import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductIndexComponent } from './index.component';
import { SidebarModule } from '../../../layout/sidebar/sidebar.module';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductItemModule } from '../../../components/product/product-item/product-item.module';
import { FilterItemModule } from '../../../components/product/filter-item/filter-item.module';
const routes: Routes = [
  {
    path:'',
    component:ProductIndexComponent
  }
]; // sets up routes constant where you define your routes


@NgModule({
  declarations: [ProductIndexComponent],
  imports: [
    CommonModule,
    SidebarModule,
    ProductItemModule,
    FilterItemModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ],
  exports:[ProductIndexComponent]
})
export class ProductIndexModule { }
