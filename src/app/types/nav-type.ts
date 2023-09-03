export type NavType = 
{
    link:string,
    value:string,
    icon?:string;
    count?:number;
    hasLink:boolean,
    onClick?:() => void;
};