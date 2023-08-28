import { Component, OnInit } from '@angular/core';
import { Basket } from 'src/app/models/basket';
import { BasketService } from 'src/app/services/basket.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-card',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
//TODO cart-summary component'i içini doldur ve cart-summary tasarımını tamamla.
//TODO cart-summary => order sub  total,shipping total,order total
//TODO Bu kısmı cart-item component'i içine taşı.
//TODO cart item'a artı(+) ve (-) icon'ları ekle.Basıldığında cart item quantity artma-azaltma işlemi gerçekleştirsin.
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
  removeCartItem(id:number){
    this.basketService.removeBasketItem(this.basket.id,id)
    this.basketService.basketSource$.subscribe(basket => {
      this.basket = basket;
      console.log(basket);
    });
    this.basketService.basketTotalSource$.subscribe(basketTotal => {
      this.basketTotal = basketTotal;
      console.log(basketTotal);
    });
  }
}

