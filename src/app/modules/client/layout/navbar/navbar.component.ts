import { Component } from '@angular/core';
import { IBasket, IBasketItem } from 'src/app/models/basket';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { BasketService } from 'src/app/services/basket.service';
import { NavType } from 'src/app/types/nav-type';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   //TODO: Home ve Shop navigation aynı anda seçili geliyor.Bu durum böyle olmamalı.Çöz
  basket:IBasket;
  currentUser:User;
  navLinks:NavType[] = 
  [
    {
      link: '/profile',
      value: 'Profile',
      icon:'fas fa-sign-in-alt',
      hasLink:true
    },
    {
      link: '#',
      value: 'Logout',
      hasLink:false,
      onClick:() =>this.logout()
    }
]

  contentLoaded:boolean;
  constructor(public basketService:BasketService,
    public accountService:AccountService) {
    let token = localStorage.getItem('token');
    this.basketService.basketSource$.subscribe(basket => {
      this.basket = basket!;
    });
    this.contentLoaded = false;
    this.accountService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
    this.contentLoaded = true;
  }
  getCount(items:IBasketItem[]):number{
    return items.reduce((sum,item)=> sum + item.quantity,0)
  }
  logout():void{
    console.log("logout tıklandı.");
    this.accountService.logout();
  }

}
