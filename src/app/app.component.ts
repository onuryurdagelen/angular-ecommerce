import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { LoaderService } from './services/loader.service';
import { BasketService } from './services/basket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerce.Angular';

  constructor(public loaderService: LoaderService,
    private basketService:BasketService) {
      setTheme('bs5');
      const basketId:string = localStorage.getItem('basket_id');
      if(basketId) this.basketService.getBasket(basketId);
    
  }
  
}
