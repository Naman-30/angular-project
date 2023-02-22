import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParamsRoutingModule } from './params-routing.module';
import { ParamsComponent } from './params.component';
import { FragmentsComponent } from './components/fragments/fragments.component';
import { QueryParamsComponent } from './components/query-params/query-params.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    ParamsComponent,
    FragmentsComponent,
    QueryParamsComponent
  ],
  imports: [
    CommonModule,
    ParamsRoutingModule,
    MatDividerModule,
    MatToolbarModule,
    MatCardModule,



  ]
})
export class ParamsModule { }
