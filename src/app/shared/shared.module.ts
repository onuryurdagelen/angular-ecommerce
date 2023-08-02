import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerErrorPageModule } from './pages/server-error-page/server-error-page.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { SectionHeaderComponent } from './components/section-header/section-header.component';


@NgModule({
  declarations: [
    SectionHeaderComponent
  ],
  imports: [
    CommonModule,
    ServerErrorPageModule,
    BreadcrumbModule
  ],
  exports:[
    CommonModule,
    ServerErrorPageModule,
    SectionHeaderComponent
  ]
})
export class SharedModule { }
