import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSubrayado]',
})
export class SubrayadoDirective {
  @Input()
  appSubrayado: string = 'yellow';

  private _el: ElementRef;

  constructor(element: ElementRef) {
    this._el = element;
      }

  @HostListener("mouseenter")
  onMouseEnter() {
    this._el.nativeElement.style.backgroundColor = this.appSubrayado
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this._el.nativeElement.style.backgroundColor = "white"
  }
}
