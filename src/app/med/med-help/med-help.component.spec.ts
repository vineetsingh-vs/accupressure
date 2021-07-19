import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedHelpComponent } from './med-help.component';

describe('MedHelpComponent', () => {
  let component: MedHelpComponent;
  let fixture: ComponentFixture<MedHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
