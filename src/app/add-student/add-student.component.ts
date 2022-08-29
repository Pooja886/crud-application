import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
student:Student=new Student();
  constructor(private stuservice:StudentService,
    private router:Router) { }

  ngOnInit(): void {
    
  }
 private saveStudent(){
  this.stuservice.addStudent(this.student).subscribe(data => {console.log(data);},
  error => console.log(error));
  this.goToStudentList();
  
}
goToStudentList(){
  
 this.router.navigate(["/student"]);
}
onSubmit(){
console.log(this.student);
this.saveStudent();
}
}
