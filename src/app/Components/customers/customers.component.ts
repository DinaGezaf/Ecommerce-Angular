import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../Services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Name', 'Email', 'Password', 'Actions'];
  users: any;
  constructor(private customersService: CustomersService) {}
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    this.customersService.getAllUsers().subscribe((response) => {
      this.users = Object.values(response);
    });
  }
  onDelete(productId: any) {
    this.customersService.deleteUser(productId).subscribe((response) => {
      console.log(response);
      this.users = this.users.filter((user: any) => {
        return user.id != productId;
      });
      alert(`Deleted`);
      this.loadUsers();
    });
  }

}
