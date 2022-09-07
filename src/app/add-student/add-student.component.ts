import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent  {
student:Student=new Student();
Roles=['Admin', 'User'];
registrationError: string = '';

  constructor(private stuservice:StudentService,
    private router:Router) { }

 

  private saveStudent(){
  this.stuservice.addStudent(this.student).subscribe({
    next: (data) =>{console.log(data);
    this.router.navigate(["/homepage/student"])},
    error: (err) =>{console.log(err);
    this.registrationError=err.error.message;
    console.log(this.registrationError);}

    });

 

         
}
onSubmit(){
  console.log(this.student);
  this.saveStudent();
  
}
}

