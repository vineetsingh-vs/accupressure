import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedPromotionComponent } from './med-promotion.component';

describe('MedPromotionComponent', () => {
  let component: MedPromotionComponent;
  let fixture: ComponentFixture<MedPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
