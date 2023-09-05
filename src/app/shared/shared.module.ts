import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerErrorPageModule } from './pages/server-error-page/server-error-page.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';

@NgModule({
  declarations: [
    SectionHeaderComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    ServerErrorPageModule,
    ReactiveFormsModule,
    BreadcrumbModule
  ],
  exports:[
    CommonModule,
    ServerErrorPageModule,
    SectionHeaderComponent,
    TextInputComponent
  ]
})
export class SharedModule { }
