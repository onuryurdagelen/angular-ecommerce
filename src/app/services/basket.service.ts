import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ShopService } from './shop.service';
import { Basket, BasketItem, IBasketItem } from '../models/basket';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClientResponse } from '../models/response';
import { environment } from 'src/environments/environment';
import { ProductToReturnDto } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class BasketService extends ShopService {

  http:HttpClient;
  private basketSource = new BehaviorSubject<Basket | null>(null);
  private basketTotalSource = new BehaviorSubject<number | null>(0);
  basketSource$ = this.basketSource.asObservable();
  basketTotalSource$ = this.basketTotalSource.asObservable();

  constructor(httpClient:HttpClient) {
    super(httpClient);
    this.http = httpClient;
  }

  getBasket(id:string){
    let params = new HttpParams();
    params = params.append('id',id);
    return this.http.get<Basket>(this.baseUrl + 'basket',{params})
    .subscribe({
      next:basket => {
        this.basketSource.next(basket);
        this.calculateBasketTotal();
      }
    })
  }
  setBasket(basket:Basket){
    return this.http.post<Basket>(this.baseUrl + 'basket',basket)
    .subscribe({
      next:basket => {
        this.basketSource.next(basket);
        this.calculateBasketTotal();
      }
    })
  }
  getCurrentBasketValue(){
    return this.basketSource.value;
  }

  addItemToBasket(item:ProductToReturnDto,quantity = 1){

    const itemToAdd:IBasketItem = this.mapProductItemToBasketItem(item);
    const basket = this.getCurrentBasketValue() ?? this.createBasket();
    console.log(basket);
    basket.items = this.addOrUpdateItem(basket.items,itemToAdd,quantity);
    this.setBasket(basket);
  }
  calculateBasketTotal(){
    const basket = this.getCurrentBasketValue();
    if(!basket) return;
    const shipping = 0;
    const subTotal = basket.items.reduce((sum,item)=> sum + (item.quantity * item.price),0)
    const total = subTotal + shipping;
    this.basketTotalSource.next(total);
  }
  private mapProductItemToBasketItem(productItem:ProductToReturnDto):IBasketItem{
    return {
      brand:productItem.productBrand,
      id:productItem.id,
      pictureUrl:productItem.pictureUrl,
      price:productItem.price,
      productName:productItem.name,
      quantity:0,
      type:productItem.productType
    }
  }
  private addOrUpdateItem(basketItems:IBasketItem[],itemToAdd:IBasketItem,quantity:number):IBasketItem[]{
    
    const item = basketItems.find(x => x.id == itemToAdd.id);
    if(item) item.quantity += quantity;
    else
      {
        itemToAdd.quantity = quantity;
        basketItems.push(itemToAdd);
      }
    return basketItems;
  }
  private createBasket():Basket{
    const basket = new Basket();
    localStorage.setItem('basket_id',basket.id);
    return basket;
  }
  removeBasketItem(basketId:string,id:number):void{
    let params = new HttpParams();
    params = params.append('basketId',basketId);
    params = params.append('id',id);
    this.http
        .delete<ClientResponse>(this.baseUrl + 'Basket/basketItem',{params})
        .subscribe({
        next:((res:any)=> {
          console.log(res);
          this.basketSource.next(res.data);
          this.calculateBasketTotal();
        }),
        error:((error)=> console.log(error)),
        complete:(()=> console.log("removeBasketItem completed."))
      })

    //gelen değeri this.basketSource.next(basket) ile yakalayıp
    // basket source'dan gelen data'yı cart'taki basket ile eşleştir.
  }
}
