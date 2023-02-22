import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { ContentProjectionComponent } from './content-projection.component';
import { SharedComponent } from './components/shared/shared.component';


@NgModule({
  declarations: [
    ContentProjectionComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    ContentProjectionRoutingModule
  ]
})
export class ContentProjectionModule { }
