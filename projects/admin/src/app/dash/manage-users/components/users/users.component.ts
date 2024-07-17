import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../admin-tasks/services/tasks.service';
import { UsersService } from '../../services/users.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'projects/admin/src/app/token.service';
import { Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  email: string;
  tasksAssigned: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'email',
    'tasksAssigned',
    'actions',
  ];
  realUsersList: any[] = [];
  dataSource: any;
  constructor(
    private usersSrv: UsersService,
    private spinner: NgxSpinnerService,
    private toaster: ToastrService,
    private tokenSrv: TokenService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getUsers();
    console.log(!!this.tokenSrv.getToken());
    if (!!this.tokenSrv.getToken()) {
    } else {
      this.router.navigate(['/login']);
    }
  }
  getUsers() {
    this.realUsersList = [];
    this.spinner.show();
    this.usersSrv.getUsers().subscribe(
      (data: any) => {
        data.users.map((user: any) => {
          console.log(user);

          const userData = {
            id: user._id,
            name: user.username,
            email: user.email,
            tasksAssigned: user.assignedTasks,
            status: user.status,
          };
          this.realUsersList.push(userData);
        });
        this.dataSource = this.realUsersList;
        this.spinner.hide();
      },
      (err) => {
        this.spinner.hide();
      }
    );
  }
  deleteUser(id: any) {
    this.spinner.show();
    this.usersSrv.deleteUsers(id).subscribe(
      (res) => {
        this.getUsers();
        this.spinner.hide();

        this.toaster.success('Deleted Successfully');
      },
      (err) => {
        this.spinner.hide();
        this.toaster.error('Deleted Error');
      }
    );
  }
  changeUserStatus(status: string, id: string, index: number) {
    const Model = {
      id,
      status,
    };
    if (this.dataSource[index].tasksAssigned > 0) {
      this.toaster.error("You Can't Update This User Until Finish His Tasks");
    } else {
      this.spinner.show();
      this.usersSrv.changeStatus(Model).subscribe(
        (res) => {
          this.toaster.success('User Status Updated Successfully');
          this.getUsers();
          this.spinner.hide();
        },
        (err) => {
          this.toaster.error('Error');
          this.spinner.hide();
        }
      );
    }
  }
}
