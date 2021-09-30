import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonRoutingModule } from './person-routing.module';
import  {BookCreateComponent} from './book-create/book-create.component'
import {BookListComponent} from './book-list/book-list.component'
import {BookEditComponent} from './book-edit/book-edit.component'
import {BookDetailComponent} from "./book-detail/book-detail.component";

const routes: Routes = [
  {
    path : 'list',
    component : BookListComponent
  },
  {
    path : 'create',
    component : BookCreateComponent
  },
  {
    path : 'edit/:id',
    component : BookEditComponent
  }, {
    path : 'detail/:id',
    component : BookDetailComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonModule { }
