import { Component, Input, OnInit } from '@angular/core';
import { Basket } from 'src/app/models/basket';
import { ProductToReturnDto } from 'src/app/models/product';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit{
  @Input() product?:ProductToReturnDto;
  @Input() cart:Basket;
  constructor(private shopService:ShopService) {
    
  }
  ngOnInit(): void {
    console.log(this.cart);
  }

  updateBasket(product:ProductToReturnDto){
      this.shopService.updateBasket({
        id:"basket1",
        items:[...this.cart?.items,{
          id:product.id,
          brand:product.productBrand,
          type:product.productType,
          pictureUrl:product.pictureUrl,
          quantity:1,
          price:product.price,
          productName:product.name
        }],

      }).subscribe({
        error:((error:any)=> console.log(error)),
        complete:(() => console.log("updateBasket completed!"))
  })
  }
}
