import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  flag:boolean=true;
  changeColor(){
    this.flag=false;
  }
  changeColorLog(){
    this.flag=true;
  }

}
