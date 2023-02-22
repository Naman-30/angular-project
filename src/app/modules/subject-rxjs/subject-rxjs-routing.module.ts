import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectRxjsComponent } from './subject-rxjs.component';

const routes: Routes = [
  { path: '', component: SubjectRxjsComponent },
  {
    path:'subject', component: SubjectRxjsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRxjsRoutingModule { }
