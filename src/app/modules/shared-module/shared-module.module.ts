import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownDirective } from 'src/app/Directives/drop-down.directive';
import { FilterPipe } from 'src/app/Pipes/filter.pipe';
import { MouseOverDirective } from '../user-home/Directives/mouse-over.directive';
import { NgxImageZoomModule } from 'ngx-image-zoom';


@NgModule({
  declarations: [
    MouseOverDirective,
    DropDownDirective,
    FilterPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MouseOverDirective,
    DropDownDirective,
    FilterPipe,
    NgxImageZoomModule




  ]
})
export class SharedModuleModule {
  constructor(){
    console.log("shared module")
  }
 }
