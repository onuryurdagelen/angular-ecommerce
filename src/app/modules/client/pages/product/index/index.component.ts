import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { Basket } from 'src/app/models/basket';
import { Pagination } from 'src/app/models/pagination';
import { ProductBrand, ProductSpecParams, ProductToReturnDto, ProductType } from 'src/app/models/product';
import { SortType } from 'src/app/models/sort';
import { BasketService } from 'src/app/services/basket.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class ProductIndexComponent implements OnInit {

  @ViewChild('searchTerm') searchTerm?:ElementRef;


sortTypes:SortType[] = [
  {value: "alphabetical",text:"Alphabetical"}, 
  { value:"priceAsc", text:"Price: Low to high" },
  { value:"priceDesc",text:"Price: High to Low"}];

 /*Properties start here */ 
products:ProductToReturnDto[] = [];
productBrands:ProductBrand[] = [];
productTypes:ProductType[] = [];
cart:Basket;
paginationArr: any[] = [];
pagination:Pagination<ProductToReturnDto[]>;
currentBrandId?:number = 0;
currentTypeId?:number = 0;
currentSortType?:SortType = this.sortTypes[0];
currentSort?:string;
currentIndex:number = 1;
startShowedNumber:number = 1;
endShowedNumber:number = 1;
pageSize: number = 5;
count:number;
threeDot:boolean =false;
/*Properties end here */

constructor(private shopService:ShopService,
  private basketService:BasketService,
  private router:Router,
      private activeRoute: ActivatedRoute
  ) {
}
  ngOnInit(): void {
    //initially products brands
    this.getBrands();

    //initially products types
    this.getTypes();

    const queryParams = this.activeRoute.snapshot.queryParams
    const routeParams = this.activeRoute.snapshot.params;

    if(Object.keys(routeParams).length > 0)
      this.currentIndex = parseInt(routeParams['id']);
    
    this.getProducts({
      pageSize:this.pageSize,
      pageIndex:this.currentIndex
    });
    
  }
  calculatePagination(){
    this.paginationArr = [];
    this.startShowedNumber = 1;
    this.endShowedNumber = 1;
    let paginationCount: number = this.count / this.pageSize;
    
    for (var i = 1; i <= paginationCount; i++) {
      this.paginationArr.push(i);
      
    }
    if (this.count % this.pageSize) {
      this.paginationArr.push(this.paginationArr.length + 1);
    }
    this.startShowedNumber += this.pageSize * (this.currentIndex -1);
   
    if(this.currentIndex == this.paginationArr.length){
        if(this.paginationArr.length > 1)
          this.endShowedNumber = (this.pageSize *  this.currentIndex) - ((this.pageSize *  this.currentIndex) % this.count);
        else 
          this.endShowedNumber = this.count *  this.currentIndex;
      }
    else
    {
      if(this.paginationArr.length > 0)
        this.endShowedNumber = this.pageSize *  this.currentIndex;
      else
        {
          this.startShowedNumber = 0;
          this.endShowedNumber = 0;
        }
    } 
  }
  //This methods provides getting all products
  getProducts(productParams:Partial<ProductSpecParams>){
    this.shopService.getProducts(productParams).subscribe({
      next:((response:Pagination<ProductToReturnDto[]>) => {
        this.pagination = response;
        this.products = response.data;
        this.count = response.count;
        this.pageSize = response.pageSize;
        this.currentIndex = response.pageIndex;
        this.calculatePagination();
      }),
      error:((error:any)=> console.log(error)),
      complete:(() => {})
    });
  }
  //This methods provides getting all products brands
  getBrands(){
    this.shopService.get<null,ProductBrand[]>({
      controller:"Products",
      action: "brands",
    }).subscribe({
      next:((response:any) => {
          this.productBrands = [{id:0,name:'All'},...response];
      }),
      error:((error:any)=> {
        console.log(error);
      }),
      complete:(() => {})
    })
  }
  //This methods provides getting all products types
 getTypes(){
  this.shopService.get<null,ProductType[]>({
    controller:"products",
    action:"types"
  }).subscribe({
    next:((response:any) => {
        this.productTypes = [{id:0,name: 'All'},...response];
    }),
    error:((error:any)=> {
      console.log(error);
    }),
    complete:(() => {})
  })
 }

 /*This methods provides getting products by search input result */
 onSearchProduct(event:any){
  const searchValue = event.srcElement.value;
  if(event.key == 'Enter'){
    if(searchValue && searchValue.trim().length > 0){
      this.getProducts({
        pageSize:this.pageSize,
        pageIndex:1,
        search:this.searchTerm?.nativeElement.value
      });
      this.router.navigate(['/products'],{queryParams: {search : `${this.searchTerm?.nativeElement.value}`}})
    }
    else {
      this.getProducts({
        pageSize:this.pageSize,
        pageIndex:1,
      });
      this.router.navigate(['/products']);
    }
    this.currentBrandId = 0;
    this.currentTypeId = 0;
  }
 }

 onBrandSelected(brandId:number){
  this.currentBrandId = brandId;
  //console.log("brandId in ProductIndexComponent",brandId)
}
onSortTypeChanged(sortType:string){
  this.currentSortType.value = sortType;
}
onTypeSelected(typeId:number){
  this.currentTypeId = typeId;
  //console.log("brandId in ProductIndexComponent",typeId)
}
applyFilters(){
  this.getProducts({
    pageSize:this.pageSize,
    brandId: this.currentBrandId ? this.currentBrandId : null,
    typeId: this.currentTypeId  ? this.currentTypeId : null,
    sort:this.currentSortType ? this.currentSortType.value : null 
  });
  this.router.navigate(['/products'],{queryParams: 
    {brand : `${this.currentBrandId}`,
    type:this.currentTypeId,
    sort:this.currentSortType.value
  }})
}

  /*npx-pagination methods starts here */
  onTableDataChange(event: any) {
    this.currentIndex = event;

    this.getProducts({
      pageSize:this.pageSize,
      pageIndex:this.currentIndex,
      brandId: this.currentBrandId ? this.currentBrandId : null,
      typeId: this.currentTypeId  ? this.currentTypeId : null,
      sort:this.currentSortType.value ? this.currentSortType.value : null 
    });
    // this.router.navigate(['/contact'],{queryParams: {part: 'navbar',search: 'contact', year: 2021 }
    this.router.navigate(['/products'],{queryParams: {page : `${this.currentIndex}`}})
  }
  /*npx-pagination methods ends here */

}
