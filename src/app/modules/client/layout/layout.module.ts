import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarModule } from './navbar/navbar.module';
import { RouterModule, Routes } from '@angular/router';
import { CartModule } from '../pages/cart/cart.module';
import { HomeModule } from '../pages/home/home.module';
import { ProductIndexModule } from '../pages/product/index/index.module';
import { ProductItemModule } from '../components/product/product-item/product-item.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileModule } from '../pages/profile/profile.module';
import { RegisterModule } from '../pages/register/register.module';
import { LoginModule } from '../pages/login/login.module';
import { CheckoutModule } from '../pages/checkout/checkout.module';
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
    RegisterModule,
    LoginModule,
    ProductIndexModule,
    ProfileModule,
    ProductItemModule,
    HomeModule,
    CheckoutModule,
    SharedModule,
  ],
  exports: [
    LayoutComponent,
    SharedModule
  ],
})
export class LayoutModule { }
