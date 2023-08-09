import { Component } from '@angular/core';
import { IBasket, IBasketItem } from 'src/app/models/basket';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  basket:IBasket;

  constructor(public basketService:BasketService) {
    this.basketService.basketSource$.subscribe(basket => {
      this.basket = basket!;
    });
  }
  getCount(items:IBasketItem[]):number{
    return items.reduce((sum,item)=> sum + item.quantity,0)
  }

}
