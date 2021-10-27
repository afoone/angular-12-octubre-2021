import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImaginaButtonComponent } from './imagina-button.component';

describe('ImaginaButtonComponent', () => {
  let component: ImaginaButtonComponent;
  let fixture: ComponentFixture<ImaginaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImaginaButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImaginaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
