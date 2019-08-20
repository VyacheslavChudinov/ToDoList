import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSlideAnimation]'
})

export class SlideAnimationDirective {
  private slideDistance = 20;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.slide();
  }

  private slide() {
    this.el.nativeElement.animate([      
      { transform: 'translateX(0px)' },
      { transform: 'translateX(' + this.slideDistance + 'px)' },
      { transform: 'translateX(0px)' },
    ], { 
      duration: 1000
    });
  }

}
