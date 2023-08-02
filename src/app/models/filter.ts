export interface Filter<T> {
    data:T[];
    filterType:FilterTypes;
    title:string;
}

export enum FilterTypes {
    Checkbox,
    Textbox 
}