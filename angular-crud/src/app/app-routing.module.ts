import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskListComponent} from './components/task-list/task-list.component'
import {TaskFormComponent} from './components/task-form/task-form.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/futbolistas',
    pathMatch: 'full'
  },
  {
    path: 'futbolistas',
    component: TaskListComponent
  },
  {
    path: 'futbolistas/add',
    component: TaskFormComponent
  },
  {
    path: 'futbolistas/edit/:id',
    component:TaskFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
