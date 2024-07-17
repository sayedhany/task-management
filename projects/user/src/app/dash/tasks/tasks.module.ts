import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksDetailsComponent } from './components/tasks-details/tasks-details.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [TasksListComponent, TasksDetailsComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    TasksRoutingModule,
  ],
})
export class TasksModule {}
