import { HostListener, ElementRef, Directive, Input } from '@angular/core';

@Directive({
  selector: '[stick]',
  // host: {'(window:scroll)': 'track($event)'},
})
export class StickDirective {
  private _minY: number = 50;
  private _className: string = 'stick';
  private _previousPosition: number = 0;

  @Input('stickMin') set stickMin(minY: number) {
        this._minY = minY || this._minY;
    }

  @Input('stickClass') set stickClass(className: string) {
      this._className = className || this._className;
  }

  constructor(private _element: ElementRef) {
    
  }

  @HostListener('window:scroll', ['$event'])
  track(event:any) {
    if (document.body.scrollTop > this._previousPosition || document.body.scrollTop < this._minY) {
      this._element.nativeElement.classList.remove(this._className);
      this._previousPosition = document.body.scrollTop;
    } else {
      this._element.nativeElement.classList.add(this._className);
      this._previousPosition = document.body.scrollTop;
    }
  }
}
