import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardModule } from '../pages/dashboard/dashboard.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    DashboardModule
  ]
})
export class LayoutModule { }
