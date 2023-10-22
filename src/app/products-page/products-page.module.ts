import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';
import { ProductComponent } from '../product/product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsPageRoutingModule, 
  ]
})
export class ProductsPageModule { }
