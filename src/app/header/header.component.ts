import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  savedUser : any;

  constructor(private router : Router,
    private studentService : StudentService) { }

  ngOnInit(): void {
     this.savedUser = this.studentService.getLoggedInUser();
  }
  logout(){
    localStorage.setItem('loggedornot','false');
    this.router.navigate(['/login']);
  }

}
