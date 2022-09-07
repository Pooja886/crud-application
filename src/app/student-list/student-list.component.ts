import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  savedUser : any;
  students : Student[]=[];
  id!: number;
  constructor(private stuservice:StudentService,
    private router:Router) { }

  ngOnInit(): void {
    this.savedUser=this.stuservice.getLoggedInUser();
    this.getUsers();
  }
  private getUsers(){

    this.stuservice.getApprovedUsers(this.savedUser.id).subscribe(data => {
      this.students = data;
    },
    error => console.log(error));
  }
  
  viewDetails(id:number){
    this.router.navigate(["/homepage/student-details",id]);
  }
  updateStudent(id:number){
    this.router.navigate(["/homepage/update-student",id]);
  }
  ok(id:number){
    return this.stuservice.studentDelete(id).subscribe(data => {console.log(data);
    this.getUsers();}
    
  )
  }

}
