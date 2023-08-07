export class Basket{
    id:string;
    items:BasketItem[];

}
export class BasketItem{
    id:number;
    productName:string;
    price:number;
    quantity:number;
    pictureUrl:string;
    brand:string;
    type:string;
}