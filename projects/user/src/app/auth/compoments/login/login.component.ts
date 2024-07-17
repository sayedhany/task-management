import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { TokenService } from '../../../token.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginRes } from '../../models/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private loginSrv: LoginService,
    private tokenSrv: TokenService,
    private toaster: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      role: ['user'],
    });
  }
  login() {
    this.spinner.show();
    this.loginSrv.login(this.loginForm.value).subscribe(
      (res: LoginRes) => {
        console.log(res);

        this.tokenSrv.setToken(res.token);
        this.toaster.success('Success', 'Login Success');
        this.router.navigate(['tasks']);
        this.spinner.hide();
      },
      (err) => {
        this.toaster.error('Error', 'Login Faild!');
        this.spinner.hide();
      }
    );
  }
 
}
