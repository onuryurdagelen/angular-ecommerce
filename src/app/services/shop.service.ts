import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Pagination } from '../models/pagination';
import { ProductSpecParams, ProductToReturnDto } from '../models/product';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Basket } from '../models/basket';
import { ClientResponse } from '../models/response';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = environment.apiUrl;
  constructor(private httpClient:HttpClient) { }
  protected generateUrl(requestParameter: Partial<RequestParameters>): string {
    return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ""}`;
  }
  get<TRequest, TResponse>(
    requestParameters: Partial<RequestParameters>,
    id?: string,
    queryParams?:Partial<TRequest>
  ): Observable<TResponse>
  {
    
    let url: string = "";
    if (requestParameters.remoteUrl)
      url = requestParameters.remoteUrl;
    else
      url = `${this.generateUrl(requestParameters)}${requestParameters.queryString ? `?${requestParameters.queryString}` : ""}`

    if(id)
      url =  `${this.generateUrl(requestParameters)}${id ? `/${id}` : ""}`

    ;
    return this.httpClient.get<TResponse>(url,{headers:requestParameters.headers});
  }
  getProducts(productParams:Partial<ProductSpecParams>):Observable<Pagination<ProductToReturnDto[]>>{
    let params = new HttpParams();
    if(productParams.brandId) params= params.append('brandId',productParams.brandId);
    
    if(productParams.pageIndex) params =params.append('pageIndex',productParams.pageIndex);
    
    if(productParams.pageSize) params =params.append('pageSize',productParams.pageSize);
    
    if(productParams.price) params = params.append('price',productParams.price);
    
    if(productParams.search) params = params.append('search',productParams.search);
    
    if(productParams.sort) params = params.append('sort',productParams.sort);

    if(productParams.typeId) params = params.append('typeId',productParams.typeId);

    return this.httpClient.get<Pagination<ProductToReturnDto[]>>(this.baseUrl + 'products',{params})
  }
  getProductById(id:number):Observable<ProductToReturnDto>{
    return this.httpClient.get<ProductToReturnDto>(this.baseUrl + 'products' +'/'+id)
  }
  
}
export class RequestParameters{
  controller?:string;
  action?:string;
  queryString?: string;
  id?:string;
  headers?:HttpHeaders;
  baseUrl?:string;
  remoteUrl?:string; 
  //kendi servisimizin dışındaki uzak servis url'lere istek atacağımız url'dir.
}