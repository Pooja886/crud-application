import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-new-admin-list',
  templateUrl: './new-admin-list.component.html',
  styleUrls: ['./new-admin-list.component.css']
})
export class NewAdminListComponent implements OnInit {

  selectedUser : any;
  action !: string;
  id!:number;
  student : Student[]=[];
  stu : Student = new Student();
  currentLoggedInUser !: Student ;
  statusMap: {[key: string]: {
    [key : string] : string
  }} = {
    APPROVE : {
      'title' : 'Approve',
    },
    'REJECT' : {
      title : 'Reject',
    },
    'DELETE' : {
      title : 'Delete',
    }
  
  }
  constructor( private router : Router, 
    private stuservice: StudentService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.currentLoggedInUser = this.stuservice.getLoggedInUser();

 

  this.stuservice.getStudentById(this.currentLoggedInUser.id).subscribe({
   next: (data) => {this.stu = (data);},
   complete: () => {console.log("complete")},
   error : (err)=> {console.log(err);
    this.getAdmin();}
   });
}

displayStyle = "none";

openPopup(student : Student, action : string) {
  this.displayStyle = "block";
  this.selectedUser = student;
  this.action = action;
}
closePopup() {
  this.displayStyle = "none";
  this.selectedUser = {};
}
newAdmin(){
  this.router.navigate(['/homepage/new-admin-list'])

}
approve(){
  console.log(this.stu);

  this.stuservice.approveAdmin(this.selectedUser.id).subscribe({
    next:(data) => {this.getAdmin();},
    error : (err)=>console.log(err)});
}

deny(){
  console.log(this.stu);
  this.stuservice.denyAdmin(this.selectedUser.id).subscribe({
    next:(data) => {this.getAdmin();},
    error : (err)=>console.log(err)});
  
}

deleteUser(){
  
  this.stuservice.studentDelete(this.selectedUser.id).subscribe( data => {
    console.log(data);
    this.getAdmin();
  })
}

private getAdmin(){
  this.stuservice.getAdminList().subscribe(data => {
    this.student = data;
  });
}

handleAction(){
  if(this.action == "APPROVE"){
    this.approve();
  } else if(this.action == "REJECT"){
    this.deny();
  } else if(this.action == "DELETE"){
    this.deleteUser();
  }
  this.closePopup();

}
}

