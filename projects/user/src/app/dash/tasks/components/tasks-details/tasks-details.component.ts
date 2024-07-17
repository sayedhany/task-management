import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'projects/admin/src/app/token.service';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.scss'],
})
export class TasksDetailsComponent implements OnInit {
  taskId: string = '';
  taskDetails: any;
  constructor(
    private tasks: TasksService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private toast: ToastrService,
    private tokenSrv: TokenService
  ) {}
  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id') as string;
    if (!!this.tokenSrv.getToken() && this.taskId) {
    } else {
      this.router.navigate(['/auth/login']);
    }
    this.getTaskDetails();
  }
  getTaskDetails() {
    this.tasks.taskDetails(this.taskId).subscribe((res: any) => {
      this.taskDetails = res.tasks;
    });
  }
  completeTask(id: string) {
    this.tasks.completeTask({ id }).subscribe((res) => {
      console.log(res);
    });
  }
  moveToInProgress(item: any) {
    this.spinner.show();
    this.tasks.moveToInProgress({ id: item._id }).subscribe(
      (res: any) => {
        this.spinner.hide();
        this.toast.success(res.massage);
        console.log(res);
        this.router.navigate(['../']);
      },
      (err) => {
        this.spinner.hide();
        this.toast.error(err.massage);
      }
    );
  }
}
