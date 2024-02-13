import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverTestComponent } from './observer-test.component';

describe('ObserverTestComponent', () => {
  let component: ObserverTestComponent;
  let fixture: ComponentFixture<ObserverTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObserverTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObserverTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
