import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksAdminRoutingModule } from './admin-tasks-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [AddTaskComponent, TasksListComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    TasksAdminRoutingModule,
  ],
})
export class AdminTasksModule {}
