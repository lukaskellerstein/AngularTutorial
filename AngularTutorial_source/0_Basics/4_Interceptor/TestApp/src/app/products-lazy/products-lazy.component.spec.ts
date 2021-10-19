import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLazyComponent } from './products-lazy.component';

describe('ProductsLazyComponent', () => {
  let component: ProductsLazyComponent;
  let fixture: ComponentFixture<ProductsLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
