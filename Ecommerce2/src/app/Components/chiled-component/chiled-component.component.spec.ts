import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiledComponentComponent } from './chiled-component.component';

describe('ChiledComponentComponent', () => {
  let component: ChiledComponentComponent;
  let fixture: ComponentFixture<ChiledComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChiledComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChiledComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
