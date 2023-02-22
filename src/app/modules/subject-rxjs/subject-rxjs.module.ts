import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRxjsRoutingModule } from './subject-rxjs-routing.module';
import { SubjectRxjsComponent } from './subject-rxjs.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { Comp4Component } from './components/comp4/comp4.component';


@NgModule({
  declarations: [
    SubjectRxjsComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component
  ],
  imports: [
    CommonModule,
    SubjectRxjsRoutingModule
  ]
})
export class SubjectRxjsModule {
  constructor(){
    console.log("subject module")
  }
 }
