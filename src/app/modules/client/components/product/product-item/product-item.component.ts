import { Component, Inject, Input, OnInit } from '@angular/core';
import {  Basket,IBasket, IBasketItem } from 'src/app/models/basket';
import { ProductToReturnDto } from 'src/app/models/product';
import { BasketService } from 'src/app/services/basket.service';
import { ShopService } from 'src/app/services/shop.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit{
  @Input() product?:ProductToReturnDto;
  @Input() cart:Basket;
  constructor(
    @Inject('baseUrlForFiles') public baseUrlForFiles:string,
    private basketService:BasketService) {
  }
  ngOnInit(): void {
  }

  addOrUpdateBasket(product:ProductToReturnDto){
    this.basketService.addItemToBasket(product,1);
  }
  
}
