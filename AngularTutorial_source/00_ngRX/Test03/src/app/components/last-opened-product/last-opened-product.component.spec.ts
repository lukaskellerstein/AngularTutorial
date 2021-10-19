import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastOpenedProductComponent } from './last-opened-product.component';

describe('LastOpenedProductComponent', () => {
  let component: LastOpenedProductComponent;
  let fixture: ComponentFixture<LastOpenedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastOpenedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastOpenedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
