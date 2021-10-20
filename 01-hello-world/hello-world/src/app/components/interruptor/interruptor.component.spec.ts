import { identifierModuleUrl } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterruptorComponent } from './interruptor.component';

describe('InterruptorComponent', () => {
  let component: InterruptorComponent;
  let fixture: ComponentFixture<InterruptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterruptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterruptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should components exists', () => {
    expect(component).toBeTruthy();
  });

  it ("la luz está apagada al empezar",
    () => {
      const compiled = fixture.nativeElement as HTMLElement
      console.log("compiled", compiled)
      expect(
        compiled.querySelector("div")?.textContent
      ).toContain("off")
    }
  )

  it ("la luz se enciende al darle al botón al empezar" , ()=> {
    const compiled = fixture.nativeElement as HTMLElement
    compiled.querySelector("button")?.click()
    fixture.detectChanges
    expect(compiled.querySelector("div")?.textContent).toContain("on")
  })

  it ("la luz se apaga si estaba encendida", () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.luz = "on"
    fixture.detectChanges()
    compiled.querySelector("button")?.click()
    fixture.detectChanges()
    expect(compiled.querySelector("div")?.textContent).toContain("off")
  })



});

// it ("test de prueba", () => {
//   // aquí puedo hacer el código que me parezca
//   const a = 3
//   const obj = {
//     a: 1
//   }
//   // expectativas
//   // expect (algo). toBe....
//   expect(true).toBeTruthy()
//   //expect(false).toBeTruthy()
//   expect(a).toBe(3)
//   expect(obj).toEqual({
//     a: 1
//   })
// })
