import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path:"student",component:StudentListComponent},
  {path:"add-student",component:AddStudentComponent},
  {path:"update-student/:id",component:UpdateStudentComponent},
  {path:"student-details/:id",component:StudentDetailsComponent},
  {path:"",redirectTo:"student",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
