import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNewViewComponent } from './patient-new-view.component';

describe('PatientNewViewComponent', () => {
  let component: PatientNewViewComponent;
  let fixture: ComponentFixture<PatientNewViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientNewViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientNewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
