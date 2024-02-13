import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFromAPIComponent } from './products-from-api.component';

describe('ProductsFromAPIComponent', () => {
  let component: ProductsFromAPIComponent;
  let fixture: ComponentFixture<ProductsFromAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsFromAPIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsFromAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
