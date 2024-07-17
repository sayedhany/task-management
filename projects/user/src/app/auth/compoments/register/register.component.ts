import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { TokenService } from '../../../token.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  passwordError = false;
  constructor(
    private fb: FormBuilder,
    private loginSrv: LoginService,
    private tokenSrv: TokenService,
    private spinner: NgxSpinnerService,
    private toaster: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmedPassword: ['', [Validators.required]],
        role: ['user'],
      },
      { validators: this.checkPassword }
    );
  }
  registerUser() {
    console.log(this.registerForm);

    if (
      this.registerForm.value.password ===
      this.registerForm.value.confirmedPassword
    ) {
      this.spinner.show();
      this.loginSrv.createNewUser(this.registerForm.value).subscribe(
        (res) => {
          this.spinner.hide();
          this.toaster.success('User Created');
          this.tokenSrv.setToken(res.token);
          this.router.navigate(['/auth/login']);
        },
        (err) => {
          this.spinner.hide();
          this.toaster.error('User not Created');
        }
      );
    }
  }
  checkPassword: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let password = group.get('password')?.value;
    let confirmPassword = group.get('confirmedPassword')?.value;
    // console.log(group, 'group');

    return password === confirmPassword ? null : { notSame: true };
  };
}
