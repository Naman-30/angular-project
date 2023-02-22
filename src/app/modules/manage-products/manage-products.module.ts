import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProductsRoutingModule } from './manage-products-routing.module';
import { ManageProductsComponent } from './manage-products.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ManageProductsComponent
  ],
  imports: [
    CommonModule,
    ManageProductsRoutingModule,
    MatIconModule
  ]
})
export class ManageProductsModule { }
