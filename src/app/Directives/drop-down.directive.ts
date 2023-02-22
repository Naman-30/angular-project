import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  @HostBinding('class.active') isActive:boolean|undefined;
  @HostListener('click',['$event']) onClick(){
    this.isActive=!this.isActive;
  }

  // @HostListener('click') myClick2(){
  //   this.renderer.setAttribute(this.el.nativeElement, 'class','dropdown-header active');
  // }


}

