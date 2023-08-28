import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductToReturnDto } from 'src/app/models/product';
import { ShopService } from 'src/app/services/shop.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class ProductDetailComponent {
  @Input() product?:ProductToReturnDto;
//TODO Ürün detay sayfasını düzenle.Ürünün adedi artma-azaltma için (+) ve (-) icon'lu buttonlar koy.
  constructor(private shopService:ShopService,
    private bcService:BreadcrumbService,
    private activeRoute: ActivatedRoute
    ){
      this.bcService.set("@productDetails",' ');
    }
  ngOnInit(): void {
    const routeParams = this.activeRoute.snapshot.params;
    this.shopService.getProductById(routeParams?.['id'])
    .subscribe({
      next:((response:ProductToReturnDto) => {
        this.product = response;
        this.bcService.set("@productDetails",this.product.name);
      }),
      error:((error:any)=> console.log(error)),
      complete:(() => console.log("ProductItemComponent completed!")) 
    })
  }
}
