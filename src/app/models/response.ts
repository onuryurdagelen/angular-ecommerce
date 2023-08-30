export class ClientResponse{
    statusCode:number;
    message:string;
}
export class GenericClientResponse<T>{
    success:boolean;
    data:T;
    message:string;
}
export class ClientValidationErrorResponse{
    errors:string[];
    statusCode:number;
    message:string;
}