import { LoginAdminComponent } from './../login-admin/login-admin.component';
import { LoginUserComponent } from './../login-user/login-user.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css'],
})
export class NavbarUserComponent {
  products: any;

  constructor(private dialog: MatDialog) {}

  openEditor() {
    this.dialog.open(LoginUserComponent, {
      data: '',
      height: '70vh',
      width: '50vw',
    });
  }

  openAdmin() {
    this.dialog.open(LoginAdminComponent, {
      data: '',
      height: '70vh',
      width: '50vw',
    });
  }
}
