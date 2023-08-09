import { Component, Input, OnInit } from '@angular/core';
import {  Basket,IBasket, IBasketItem } from 'src/app/models/basket';
import { ProductToReturnDto } from 'src/app/models/product';
import { BasketService } from 'src/app/services/basket.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit{
  @Input() product?:ProductToReturnDto;
  @Input() cart:Basket;
  constructor(private basketService:BasketService) {
  }
  ngOnInit(): void {
    console.log(this.cart);
  }

  addOrUpdateBasket(product:ProductToReturnDto){
    this.basketService.addItemToBasket(product,1);
  }
  
}
