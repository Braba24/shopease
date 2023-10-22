import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  cartItems: Product[] = [];

  //Mock API response data
  items: Product[] = [
    {id : 1, productName : 'Realme Narzo', price : 15000, category : 'mobile', description : 'Product Details', imageUrl :'./assets/images/mobile-1.jpg', otherInfo: [{ name : 'Make', value :'Realme'},{ name : 'Model', value :'N53'},{ name : 'Year', value :'2022'},{ name : 'Rating', value :'4/5'},{ name : 'OS', value :	'Android 11, One UI 3.0'}],},    
    {id : 2, productName : 'Acer Aspire 3', price : 45000, category : 'computer', description : 'Product Details', imageUrl :'./assets/images/laptop-1.jpg',otherInfo: null},
    {id : 3, productName : 'Samsung M14', price : 18000, category : 'mobile', description : 'Product Details', imageUrl :'./assets/images/mobile-2.jpg',otherInfo:  [{ name : 'Make', value :'Samsung'},{ name : 'Model', value :'M14'},{ name : 'Year', value :'2023'},{ name : 'Rating', value :'3/5'},{ name : 'OS', value :	'Android 10'}]},
    {id : 4, productName : 'Dell Vostro 3520', price : 55000, category : 'computer', description : 'Product Details', imageUrl :'./assets/images/laptop-2.jpg',otherInfo: [{ name : 'Processor', value :'Core™ i3-1115G4 Processor'},{ name : 'OS', value :'Windows 11 Home'},{ name : 'Graphics', value :'Intel UHD Graphics'},{ name : 'Storage', value :'256 GB, M.2, PCIe NVMe'},] },
    {id : 2, productName : 'Oppo Reno 8', price : 29000, category : 'mobile', description : 'Product Details', imageUrl :'./assets/images/mobile-4.jpg',otherInfo:  [{ name : 'Make', value :'Samsung'},{ name : 'Model', value :'M14'},{ name : 'Year', value :'2023'},{ name : 'Rating', value :'3/5'},{ name : 'OS', value :	'Android 10'}]},    
    {id : 5, productName : 'Nokia G42', price : 11000, category : 'mobile', description : 'Product Details', imageUrl :'./assets/images/mobile-3.jpg', otherInfo: [{ name : 'Make', value :'Realme'},{ name : 'Model', value :'N53'},{ name : 'Year', value :'2022'},{ name : 'Rating', value :'4/5'},{ name : 'OS', value :	'Android 13.0'}],},
    {id : 7, productName : 'Acer Aspire Lite', price : 65000, category : 'computer', description : 'Product Details', imageUrl :'./assets/images/laptop-1.jpg',otherInfo: [{ name : 'Processor', value :'Intel Core i3 - N305'},{ name : 'OS', value :'Windows 11 Home'},{ name : 'Graphics', value :'Intel UHD Graphics'},{ name : 'Storage', value :'512 GB, PCIe, NVMe'},] },
    {id : 8, productName : 'Dell Pavillion', price : 80000, category : 'computer', description : 'Product Details', imageUrl :'./assets/images/laptop-2.jpg',otherInfo: null },
    {id : 9, productName : 'Boat 500', price : 6000, category : 'accessories', description : 'Product Details', imageUrl :'./assets/images/speaker-1.jpg',otherInfo: null },
    {id : 10, productName : 'Boat Z1', price : 2000, category : 'accessories', description : 'Product Details', imageUrl :'./assets/images/speaker-2.jpg',otherInfo: null },
    {id : 11, productName : 'Canon', price : 38000, category : 'camera', description : 'Product Details', imageUrl :'./assets/images/camera.jpg',otherInfo: null },
    {id : 12, productName : 'Dell Keyboard', price : 700, category : 'accessories', description : 'Product Details', imageUrl :'./assets/images/keyboard.jpg',otherInfo: null }];

  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  getProducts(category:string , searchText:string) {
    let filteredResult:Product[] = this.items;
    if(category && category !== "" && category !== "All"){
      filteredResult = filteredResult.filter(p => p.category == category); //To filter categories      
    }
    if(searchText && searchText !== ""){
      filteredResult = filteredResult.filter(p => p.productName.toLowerCase().includes(searchText.toLowerCase()));//To filter products
    }
    return filteredResult;
  }

  getCategory(){
    let categoryList = [...new Set(this.items.map(p => p.category))]
    return categoryList;
  }

}