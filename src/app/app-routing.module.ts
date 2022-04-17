import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'reactive-forms',
    component: ReactiveFormsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
