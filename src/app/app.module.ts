import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './student.service';
import {HttpClientModule} from '@angular/common/http';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    StudentDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    StudentService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
