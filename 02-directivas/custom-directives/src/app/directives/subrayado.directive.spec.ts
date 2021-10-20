import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubrayadoDirective } from './subrayado.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <h2 [appSubrayado]="'blue'"></h2>
    <h2 [appSubrayado]="'green'"></h2>
  `,
})
class TestComponent {}

describe('SubrayadoDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let els: Array<DebugElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, SubrayadoDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    // recupero todos los elementos que tienen la directiva
    els = fixture.debugElement.queryAll(By.directive(SubrayadoDirective));
  });

  it ("Debe tener dos elementos con la directiva", () => {
    expect(els.length).toBe(2)
  })
});
