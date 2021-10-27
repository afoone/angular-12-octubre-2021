import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEditViewComponent } from './patient-edit-view.component';

describe('PatientEditViewComponent', () => {
  let component: PatientEditViewComponent;
  let fixture: ComponentFixture<PatientEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientEditViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
