import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],  
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent {
  @Input() product:any;
  @Output() addToCartEvent = new EventEmitter<Product>();

  placeHolderImg = './assets/images/placeholder.png'

  addToCart(){
    this.addToCartEvent.emit(this.product);
  }
}