import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
})
export class LoginAdminComponent {
  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthService
  ) {
    this.loginForm = formBuilder.group({
      uemail: ['', [Validators.required]],
      upassword: ['', [Validators.required]],
    });
  }
  get form() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.authService.login().subscribe((response: any) => {
      localStorage.setItem('token', response);
      console.log(response);
    });
    this.router.navigate(['view']);
  }
}
