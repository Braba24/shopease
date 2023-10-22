import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MenuLinksComponent } from '../menu-links/menu-links.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent,MenuLinksComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show menu method should return true', () => {
    component.showMenu();
    expect(component.isMenuVisible ).toEqual(true);
  });

  it('close menu method should return true', () => {
    component.closeMenu();
    expect(component.isMenuVisible ).toEqual(false);
  });
  
});
