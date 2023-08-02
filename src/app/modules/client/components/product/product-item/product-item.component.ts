import { Component, Input, OnInit } from '@angular/core';
import { ProductToReturnDto } from 'src/app/models/product';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent{
  @Input() product?:ProductToReturnDto;

}
