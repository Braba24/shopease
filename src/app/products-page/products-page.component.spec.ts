import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPageComponent } from './products-page.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from '../product/product.component';
import { Product } from '../models/product';
import { DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;

  let element:DebugElement;
  let select:ElementRef;
  let search:ElementRef;

  const event = { target: { value: 'All' }};
  const searchEvent = { target: { value: 'sa' }};
  let selected:string = event.target.value;
  let searchText:string = searchEvent.target.value;
  
  let categories:string[];
  let products: Product[];
  let product: Product;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsPageComponent,ProductComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance;    
    element = fixture.debugElement;
    select = element.query(By.css('#search-filter'));
    search = element.query(By.css('#select-filter'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('update method should call getProducts', () => {
    spyOn(component,'getProducts');    
    component.update(event);
    expect(component.selected).toEqual(selected);
    expect(component.searchText).toEqual("");
  });

  it('searchProducts method should call getProducts', () => {
    spyOn(component,'searchProducts');
    component.searchProducts(searchEvent);
    expect(component.searchText).toEqual("");
  });
});