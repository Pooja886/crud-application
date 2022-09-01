import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  student:Student=new Student();
  loginError : string = '';
  constructor(private stuservice:StudentService,
    private router : Router) { }

  ngOnInit(): void {
  }

 

 
  onLogin(){
    this.loginError = '';
    console.log(this.student);
    this.stuservice.loginUser(this.student.email , this.student.password).subscribe(data =>
      {
        console.log(data);
        
        this.router.navigate(['/header']);
      },
      error =>{
        console.log(error)
        this.loginError=error.error.message;
        console.log(this.loginError);

        });
     
      
    
  }

}
