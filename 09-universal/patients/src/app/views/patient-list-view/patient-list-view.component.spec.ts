import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListViewComponent } from './patient-list-view.component';

describe('PatientListViewComponent', () => {
  let component: PatientListViewComponent;
  let fixture: ComponentFixture<PatientListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
