import { Component } from '@angular/core';
import { Category, Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  //Mock data for categories
  categoryList: Category[] = [
    {name:'Fashion', imgUrl:'./assets/images/fashion.jpg', path:''},
    {name:'Electronics', imgUrl:'./assets/images/gadgets.jpg', path:'/products'},
    {name:'Furniture', imgUrl:'./assets/images/table.jpg', path:''},
    {name:'Books', imgUrl:'./assets/images/books.jpg', path:''},
  ]
}
