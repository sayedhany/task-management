import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TasksService } from '../../services/tasks.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'projects/admin/src/app/token.service';
import { Router } from '@angular/router';
export interface PeriodicElement {
  title: string;
  user: string;
  deadLineDate: string;
  status: string;
}

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'title',
    'user',
    'deadLineDate',
    'status',
    'actions',
  ];
  dataSource = [];
  tasksFilter!: FormGroup;
  users: any = [
    { name: 'Moahmed', id: 1 },
    { name: 'Ali', id: 2 },
    { name: 'Ahmed', id: 3 },
    { name: 'Zain', id: 4 },
  ];

  status: any = [
    { name: 'Done', id: 1 },
    { name: 'In-Prossing', id: 2 },
    { name: 'To Do', id: 3 },
  ];
  constructor(
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    private tasksSrv: TasksService,
    private toaster: ToastrService,
    private tokenSrv: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllTasks();
    if (!!this.tokenSrv.getToken()) {
    } else {
      this.router.navigate(['/login']);
    }
  }

  getAllTasks() {
    this.spinner.show();
    this.tasksSrv.getAllTasks().subscribe(
      (res: any) => {
        console.log(res);
        this.dataSource = res.tasks;
        this.spinner.hide();
      },
      (err) => {
        this.spinner.hide();
      }
    );
  }
  addTask() {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllTasks();
      }
    });
  }
  deleteTask(id: any) {
    this.spinner.show();
    console.log(id);
    this.tasksSrv.deleteTask(id).subscribe(
      (res) => {
        this.getAllTasks();
        this.spinner.hide();
        this.toaster.show('Task Deleted Successfuly');
      },
      (err) => {
        this.toaster.error('Error with deleting this task');
        this.spinner.hide();
      }
    );
  }
  updateTask(data: any) {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '750px',
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllTasks();
      }
    });
  }
}
