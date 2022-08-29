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

  students:Student[]=[];
  id!: number;
  constructor(private stuservice:StudentService,
    private router:Router) { }

  ngOnInit(): void {
    this.getStudentList();
  }
  private getStudentList(){
    this.stuservice.getStudentList().subscribe((data) => {this.students= data});
  }
  viewDetails(id:number){
    this.router.navigate(["student-details",id]);
  }
  updateStudent(id:number){
    this.router.navigate(["update-student",id]);
  }
  deleteStudent(id:number){
    return this.stuservice.studentDelete(id).subscribe(data => {console.log(data);
    this.getStudentList();}
  )
  }

}
