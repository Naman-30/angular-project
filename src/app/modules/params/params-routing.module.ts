import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FragmentsComponent } from './components/fragments/fragments.component';
import { QueryParamsComponent } from './components/query-params/query-params.component';
import { ParamsComponent } from './params.component';

const routes: Routes = [
  { path: '', component: ParamsComponent },
  { path: 'query-params', component: QueryParamsComponent },
  { path: 'fragments', component: FragmentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParamsRoutingModule { }
