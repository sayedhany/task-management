import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { RouterModule, Routes } from '@angular/router';
import { TasksDetailsComponent } from './components/tasks-details/tasks-details.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksListComponent,
  },
  {
    path: 'tasks/task/:id',
    component: TasksDetailsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
