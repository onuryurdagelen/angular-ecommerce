import { Component, OnInit } from '@angular/core';
import { Basket } from 'src/app/models/basket';
import { BasketService } from 'src/app/services/basket.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-card',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  basket:Basket;
  basketTotal:number;
  constructor(public basketService:BasketService) {
  }
  ngOnInit(): void {
    // this.getBasketById('basket1');
    const basketId:string = localStorage.getItem('basket_id'); 
    this.basketService.getBasket(basketId);
    this.basketService.basketSource$.subscribe(basket =>this.basket = basket);
    this.basketService.basketTotalSource$.subscribe(basketTotal => this.basketTotal = basketTotal);
  }


}
