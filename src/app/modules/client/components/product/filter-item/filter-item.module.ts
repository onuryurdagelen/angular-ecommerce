import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterItemComponent } from './filter-item.component';



@NgModule({
  declarations: [FilterItemComponent],
  imports: [
    CommonModule
  ],
  exports:[FilterItemComponent]
})
export class FilterItemModule { }
