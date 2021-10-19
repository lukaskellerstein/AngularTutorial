import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEagerComponent } from './home-eager.component';

describe('HomeEagerComponent', () => {
  let component: HomeEagerComponent;
  let fixture: ComponentFixture<HomeEagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
