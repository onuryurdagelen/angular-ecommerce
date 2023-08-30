import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerErrorPageModule } from './pages/server-error-page/server-error-page.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SectionHeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ServerErrorPageModule,
    BreadcrumbModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServerErrorPageModule,
    SectionHeaderComponent
  ]
})
export class SharedModule { }
