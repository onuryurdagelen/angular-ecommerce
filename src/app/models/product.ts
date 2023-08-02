export interface ProductToReturnDto {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    productType: string;
    productBrand: string;
  }
export interface ProductSpecParams{
  pageSize:number;
  pageIndex:number;
  brandId?:number;
  typeId?:number;
  sort?:string;
  search?:string;
  price?:number;
}


  
  export interface ProductType {
    name: string
    id: number
    createdAt: string
    updatedAt: string
    activeFlag: number
    activeStatusText: string
  }
  
  export interface ProductBrand {
    name: string
    id: number
    createdAt: string
    updatedAt: string
    activeFlag: number
    activeStatusText: string
  }