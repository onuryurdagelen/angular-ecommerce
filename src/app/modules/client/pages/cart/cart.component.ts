import { Component, OnInit } from '@angular/core';
import { Basket } from 'src/app/models/basket';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-card',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cart:Basket;
  constructor(private shopService:ShopService) {

  }
  ngOnInit(): void {
    this.shopService.getBasketById('basket1').subscribe({
      next:((response:Basket) => {
        console.log(response);
        this.cart = response;
      }),
      error:((error:any)=> console.log(error)),
      complete:(() => console.log("Cart ngOnInit completed!"))
    })
  }
  removeCartItem(id:number){
    this.shopService.removeCartItem(id)
    .subscribe({
     error:((error:any)=> console.log(error)),
     complete:(() => console.log("Cart removeCartItem completed!"))
    })
  }

}
