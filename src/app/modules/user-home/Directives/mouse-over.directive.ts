import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseOver]'
})
export class MouseOverDirective {

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') mouserOver(){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'lightGray');
  }
  
  @HostListener('mouseout') mouserOut(){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
  }

}

