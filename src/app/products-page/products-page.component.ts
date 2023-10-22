import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {

  selected:string = "";
  searchText:string = "";
  categories:string[] = [];
  products: Product[] = [];

  constructor(private productsService:ProductsService) {
    this.getProducts(this.selected, this.searchText);
    this.getCategories();
  }

  update(e:any){ 
    this.selected = e?.target?.value ? e.target.value : '';
    this.searchText = "";
    this.getProducts(this.selected, this.searchText);
  }

  searchProducts(e:any) {
    this.searchText = e?.target?.value ? e.target.value : '';
    this.getProducts(this.selected, this.searchText);
  }

  getCategories(){
    this.categories = this.productsService.getCategory();
  }

  getProducts(category:string, searchText:string){
    this.products = this.productsService.getProducts(category , searchText);
  }

  addToCart(item:any){
    this.productsService.addToCart(item);
  }
}
