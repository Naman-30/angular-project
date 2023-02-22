import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { UserHomeComponent } from './components/user-home.component';
import { ProcuctsComponent } from './components/procucts/procucts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    UserHomeComponent,
    ProcuctsComponent,
    ProductDetailsComponent,
    
    ContactUsComponent,
    AboutUsComponent, 
     GalleryComponent, GalleryItemComponent
  ],
  imports: [
    CommonModule,
    UserHomeRoutingModule,
    FormsModule,
    SharedModuleModule
  ],
  exports:[
    UserHomeComponent
  ]
})
export class UserHomeModule {
  constructor(){
    console.log('userHome module');
  }
}
