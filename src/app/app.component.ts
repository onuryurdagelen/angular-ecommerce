import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { LoaderService } from './services/loader.service';
import { BasketService } from './services/basket.service';
import { AccountService } from './services/account.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ECommerce.Angular';

  constructor(public loaderService: LoaderService,
    private basketService:BasketService,
    private accountService:AccountService
    ) {
      setTheme('bs5');

  }
  ngOnInit(): void {
    this.loadCurrentUser();
    this.loadCurrentBasket();
  }
  loadCurrentBasket(){
    const basketId = localStorage.getItem('basket_id');
    if(basketId)  this.basketService.getBasket(basketId);
  }
  loadCurrentUser(){
    const token = localStorage.getItem('token');
    this.accountService.loadCurrentUser(token).subscribe();
     
  }
  
}
