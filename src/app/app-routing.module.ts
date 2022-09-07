import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { AuthenticationGuard } from './authentication.guard';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NewAdminListComponent } from './new-admin-list/new-admin-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"Registration" , component : AddStudentComponent},
 
  {path: "homepage", component : HomepageComponent ,canActivate:[AuthenticationGuard] ,children : [
    {path: "", redirectTo:"welcome" , pathMatch:"full"},
    {path:"student",component:StudentListComponent},
    {path:"add-student",component:AddStudentComponent},
    {path:"update-student/:id",component:UpdateStudentComponent},
    {path:"student-details/:id",component:StudentDetailsComponent},
    {path:"header",component:HeaderComponent},
    {path:"new-admin-list" , component:NewAdminListComponent},
    {path:"welcome",component:WelcomeComponent}
    
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
