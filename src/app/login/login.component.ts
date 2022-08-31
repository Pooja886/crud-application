import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  student:Student=new Student();
  constructor() { }

  ngOnInit(): void {
  }
  onLogin(){

  }

}
