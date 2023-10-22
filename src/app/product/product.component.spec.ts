
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  let element: DebugElement;
  let button: ElementRef;
  let product: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent]
    });
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    button = element.query(By.css('#add-to-cart'));    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('add to cart event', () => {
    it('should emit when button clicked', () => {
      spyOn(component.addToCartEvent, 'emit');
      button.nativeElement.click();
      expect(component.addToCartEvent.emit).toHaveBeenCalledWith(product);
    });
    it('should emit when method called', () => {
      spyOn(component.addToCartEvent, 'emit');
      component.addToCart();
      expect(component.addToCartEvent.emit).toHaveBeenCalledWith(product);
    });
    it('should emit when button clicked', () => {
      component.addToCartEvent.subscribe(next => {
        expect(next).toEqual(product);
      });
      button.nativeElement.click();
    });
  });
});
