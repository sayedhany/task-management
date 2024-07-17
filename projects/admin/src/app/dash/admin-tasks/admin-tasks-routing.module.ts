import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

const routes: Routes = [
  {
    path: '',
    component: TasksListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksAdminRoutingModule {}
