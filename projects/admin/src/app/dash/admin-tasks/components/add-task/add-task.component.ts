import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { TasksService } from '../../services/tasks.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService } from '../../../manage-users/services/users.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  users: any = [
    { name: 'sayed hany', id: '6695142051b60929341f17f3' },
    { name: 'ahmed hany', id: '6695148551b60929341f17fa' },
    { name: 'Mo Hany', id: '669514cc51b60929341f180a' },
  ];
  newTaskForm: any;
  fileName = '';
  formValues: any;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<AddTaskComponent>,
    private tasksSrv: TasksService,
    private toaster: ToastrService,
    public matDialog: MatDialog,
    private usersSrv: UsersService,
    private spinner: NgxSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  getDataFromSubject() {
    // this.userService.userData.subscribe((res:any) => {
    //   this.users = this.usersMapping(res.data)
    // })
  }
  ngOnInit(): void {
    this.createForm();
    this.getUsers();
  }
  getUsers() {
    this.users = [];
    this.spinner.show();
    this.usersSrv.getUsers().subscribe(
      (data: any) => {
        data.users.map((user: any) => {
          console.log(user);

          const userData = {
            id: user._id,
            name: user.username,
          };
          this.users.push(userData);
        });

        this.spinner.hide();
      },
      (err) => {
        this.spinner.hide();
      }
    );
  }
  usersMapping(data: any[]) {
    let newArray = data?.map((item) => {
      return {
        name: item.username,
        id: item._id,
      };
    });
    return newArray;
  }
  createForm() {
    this.newTaskForm = this.fb.group({
      title: [
        this.data?.title || '',
        [Validators.required, Validators.minLength(5)],
      ],
      userId: [this.data?.userId?._id || '', Validators.required],
      image: [this.data?.image || '', Validators.required],
      description: [this.data?.description || '', Validators.required],
      deadline: [
        this.data
          ? new Date(
              this.data?.deadline.split('-').reverse().join('-')
            ).toISOString()
          : '',
        Validators.required,
      ],
    });
    this.formValues = this.newTaskForm.value;
  }

  selectImage(event: any) {
    this.fileName = event.target.value;
    this.newTaskForm.get('image')?.setValue(event.target.files[0]);
  }

  createTask() {
    this.spinner.show();
    let model = this.prepereFormData();
    this.tasksSrv.createTask(model as any).subscribe(
      (res) => {
        this.spinner.hide();
        this.toaster.success('Task Created Succesfully', 'Success');
        this.dialog.close(true);
      },
      (error) => {
        this.spinner.hide();
        this.toaster.error(error.error.message);
      }
    );
  }

  updateTask() {
    this.spinner.show();
    let model = this.prepereFormData();
    this.tasksSrv.updateTask(model, this.data._id).subscribe(
      (res) => {
        this.spinner.hide();
        this.toaster.success('Task Updated Succesfully', 'Success');
        this.dialog.close(true);
      },
      (error) => {
        this.spinner.hide();
        this.toaster.error(error.error.message);
      }
    );
  }

  prepereFormData() {
    let newData = moment(this.newTaskForm.value['deadline']).format(
      'DD-MM-YYYY'
    );
    let formData = new FormData();
    Object.entries(this.newTaskForm.value).forEach(([key, value]: any) => {
      if (key == 'deadline') {
        formData.append(key, newData);
      } else {
        formData.append(key, value);
      }
    });
    return formData;
  }

  close() {
    this.dialog.close();
  }
}
