import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/client/layout/layout.component';
import { HomeComponent } from './modules/client/pages/home/home.component';
import { ProductDetailComponent } from './modules/client/pages/product/detail/detail.component';
import { ProductIndexComponent } from './modules/client/pages/product/index/index.component';
import { ProductDetailModule } from './modules/client/pages/product/detail/detail.module';
import { LoginComponent } from './modules/client/pages/login/login.component';
import { RegisterComponent } from './modules/client/pages/register/register.component';
import { CartComponent } from './modules/client/pages/cart/cart.component';
import { TestErrorComponent } from './shared/pages/test-error/test-error.component';
import { NotFoundErrorComponent } from './shared/pages/not-found-error/not-found-error.component';
import { ServerErrorPageComponent } from './shared/pages/server-error-page/server-error-page.component';
import { MaintenanceComponent } from './shared/pages/maintenance/maintenance.component';
import { ProfileComponent } from './modules/client/pages/profile/profile.component';

const routes: Routes = [
  //Client Module
  {
    path:'',
    component:LayoutComponent,
    data: { breadcrumb: 'Home' },
    children:[
      {
        path:'',
        component:HomeComponent,
        loadChildren:() => import('./modules/client/pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path:'profile',
        component:ProfileComponent,
        data:{breadcrumb:'Profile'},
        loadChildren:() => import('./modules/client/pages/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path:'products',
        component:ProductIndexComponent,
        data:{breadcrumb:'Products'},
        loadChildren:() => import('./modules/client/pages/product/index/index.module')
        .then(m=> m.ProductIndexModule),
      },
      {
        path:'products/:id',
        data:{breadcrumb:{alias:'productDetails'}},
        component:ProductDetailComponent,
        loadChildren:() => import('./modules/client/pages/product/detail/detail.module')
        .then(m => m.ProductDetailModule)
      },
      {
        path:'cart',
        component:CartComponent,
        data:{breadcrumb:'Cart'},
        loadChildren:() => import('./modules/client/pages/cart/cart.module')
        .then(m => m.CartModule)
      },
      {path:'test-error',component:TestErrorComponent},
      {path:'not-found',component:NotFoundErrorComponent},
      {path:'server-error',component:ServerErrorPageComponent},
      {path:'maintenance',component:MaintenanceComponent},
    ],
  },
  {
    path:'login',
    component:LoginComponent,
    loadChildren:() => import('./modules/client/pages/login/login.module')
    .then(m => m.LoginModule)
  },
  {
    path:'register',
    component:RegisterComponent,
    loadChildren:() => import('./modules/client/pages/register/register.module')
    .then(m => m.RegisterModule)
  },
  {path:"**",component:NotFoundErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
