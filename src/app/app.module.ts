import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GalleryItems } from './DataModel/gallery';
import { ProductsItems } from './DataModel/products';
// import { FilterPipe } from './Pipes/filter.pipe';
// import { DropDownDirective } from './Directives/drop-down.directive';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { NgxImageZoomModule } from 'ngx-image-zoom';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    // FilterPipe,
    // DropDownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    AuthenticationModule,
    MatSnackBarModule,
    LoadingBarModule,
    NgxImageZoomModule,



  ],
  providers: [GalleryItems,ProductsItems],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('app module')
  }
}
