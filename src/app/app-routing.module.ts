import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ForgotPasswordComponent } from './modules/authentication/components/forgot-password/forgot-password.component';
import { LoginComponent } from './modules/authentication/components/login/login.component';
import { SignUpComponent } from './modules/authentication/components/sign-up/sign-up.component';
import { CustomPreloadingService } from './services/custom-preloading.service';

const routes: Routes = [
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: '', redirectTo: '/welcome', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signUp', component: SignUpComponent
  },
  {
    path: 'forgot-Password', component: ForgotPasswordComponent
  },
  {
    path: 'userHome', data: {preload: true}, loadChildren: () => import('./modules/user-home/user-home.module').then(
      (M) => M.UserHomeModule
    )
  },
  { path: 'manageProducts', loadChildren: () => import('./modules/manage-products/manage-products.module').then(m => m.ManageProductsModule) },
  { path: 'manageUsers', loadChildren: () => import('./modules/manage-users/manage-users.module').then(m => m.ManageUsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: CustomPreloadingService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
