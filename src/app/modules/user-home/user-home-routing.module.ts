import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProcuctsComponent } from './components/procucts/procucts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserHomeComponent } from './components/user-home.component';

const routes: Routes = [
  { path: '', component: UserHomeComponent },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProcuctsComponent,
      },
      {
        path: ':pid',
        component: ProductDetailsComponent,
      },
    ],
  },
  {
    path: 'contactUs',
    component: ContactUsComponent,
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'gallery/:id',
    component: GalleryItemComponent,
  },
  {
    path: 'subject',
    loadChildren: () =>
      import('../subject-rxjs/subject-rxjs.module').then(
        (m) => m.SubjectRxjsModule
      ),
  },
  {
    path: 'params',
    loadChildren: () =>
      import('../params/params.module').then((m) => m.ParamsModule),
  },
  {
    path: 'Content-Projection',
    loadChildren: () =>
      import('../content-projection/content-projection.module').then(
        (m) => m.ContentProjectionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserHomeRoutingModule {}
