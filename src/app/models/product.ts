export interface Product {
    id: number;
    productName: string;
    category : string;
    price: number;
    description: string | null;
    imageUrl: string | null;
    otherInfo : Feature[] | null
}

export interface Feature {
    name: string;
    value : string;
}

export interface Category {
    name: string;
    imgUrl : string | null;
    path : string | null;
}