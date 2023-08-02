import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filter, FilterTypes } from 'src/app/models/filter';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent {
  @Input() title?:string; //filter title
  @Input() type:string;
  @Input() data?:any;

  @Input() selectedTypeId:number;
  @Input() selectedBrandId?:number;
  @Input() selectedSortType?:string;
  @Output() typeIdChanged:EventEmitter<number> = new EventEmitter();
  @Output() brandIdChanged:EventEmitter<number> = new EventEmitter();
  @Output() sortTypeChanged:EventEmitter<string> = new EventEmitter();

  onBrandSelected(event:any){
    this.selectedBrandId = parseInt(event.srcElement.value);
    this.brandIdChanged.emit(this.selectedBrandId);
    // console.log("brandId in FilterItemComponent",this.selectedBrandId)
  }
  onTypeSelected(event:any){
    this.selectedTypeId = parseInt(event.srcElement.value);
    console.log("selectedTypeId",this.selectedTypeId)
    this.typeIdChanged.emit(this.selectedTypeId);
    // console.log("typeId in FilterItemComponent",this.selectedTypeId)
  }
  onSortSelected(event:any){
    console.log(event.srcElement.value);
    this.selectedSortType = event.srcElement.value;
    this.sortTypeChanged.emit(this.selectedSortType);
  }

}
