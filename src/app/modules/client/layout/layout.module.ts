import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarModule } from './navbar/navbar.module';
import { RouterModule, Routes } from '@angular/router';
import { CartModule } from '../pages/cart/cart.module';
import { HomeModule } from '../pages/home/home.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { ProductIndexModule } from '../pages/product/index/index.module';
import { ProductItemModule } from '../components/product/product-item/product-item.module';
import { ServerErrorPageModule } from 'src/app/shared/pages/server-error-page/server-error-page.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes:Routes = [
  {
    path: '',
    component:LayoutComponent
  }
]
@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    NavbarModule,
    CartModule,
    ProductIndexModule,
    ProductItemModule,
    SharedModule,
    HomeModule
  ],
  exports: [
    LayoutComponent
  ],
})
export class LayoutModule { }
