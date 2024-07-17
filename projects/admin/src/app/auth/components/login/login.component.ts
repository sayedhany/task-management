import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginRes } from '../../models/models';
import { TokenService } from '../../../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(
    private fb: FormBuilder,
    private toaster: ToastrService,
    private router: Router,
    private tokenSrv: TokenService,
    private spinner: NgxSpinnerService,
    private loginSrv: LoginService
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
      role: ['admin'],
    });
  }
  login() {
    console.log(this.loginForm?.value);
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
