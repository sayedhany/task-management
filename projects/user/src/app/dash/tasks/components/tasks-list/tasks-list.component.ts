import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'projects/admin/src/app/token.service';
export interface PeriodicElement {
  title: string;
  description: string;
  deadLineDate: string;
  status: string;
  userId: string;
}

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {
  displayedColumns: string[] = [
    'position',
    'title',
    'user',
    'deadLineDate',
    'status',
    'actions',
  ];
  userID: string = '';
  dataSource: PeriodicElement[] = [];
  tasksFilter!: FormGroup;
  users: any = [
    { name: 'Moahmed', id: 1 },
    { name: 'Ali', id: 2 },
    { name: 'Ahmed', id: 3 },
    { name: 'Zain', id: 4 },
  ];

  status: any = [
    { name: 'Complete', id: 1 },
    { name: 'In-Prossing', id: 2 },
    { name: 'To Do', id: 3 },
  ];
  userData: any;

  constructor(
    public dialog: MatDialog,
    private tasksSrv: TasksService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private toast: ToastrService,
    private router: Router,
    private tokenSrv: TokenService
  ) {}

  ngOnInit(): void {
    if (!!this.tokenSrv.getToken()) {
    } else {
      this.router.navigate(['/auth/login']);
    }
    this.createform();
    this.getUserData();
    this.getAllTasks();
  }

  createform() {
    this.tasksFilter = this.fb.group({
      title: [''],
      userId: [''],
      fromDate: [''],
      toDate: [''],
    });
  }

  getUserData() {
    let token = JSON.stringify(localStorage.getItem('token'));
    this.userData = JSON.parse(window.atob(token.split('.')[1]));
    console.log(this.userData);
  }
  getAllTasks() {
    this.spinner.show();

    this.tasksSrv.userTasks(this.userData.userId).subscribe(
      (res: any) => {
        this.spinner.hide();
        this.dataSource = res.tasks;
      },
      (error) => {
        this.spinner.hide();
        this.dataSource = [];
      }
    );
  }
  taskDetails(item: any) {
    console.log(item);
    this.router.navigate([`tasks/task/${item._id}`]);
  }
  complete(item: any) {
    this.spinner.show();
    const model = { id: item._id };
    this.tasksSrv.completeTask(model).subscribe((res) => {
      this.spinner.hide();
      this.getAllTasks();
      this.toast.success('Task completed Successfully');
      console.log(res);
    });
  }
  moveToInProgress(item: any) {
    this.spinner.show();
    this.tasksSrv.moveToInProgress({ id: item._id }).subscribe(
      (res: any) => {
        this.spinner.hide();
        this.toast.success(res.massage);
        console.log(res);
        this.getAllTasks();
      },
      (err) => {
        this.spinner.hide();
        this.toast.error(err.massage);
      }
    );
  }
}
