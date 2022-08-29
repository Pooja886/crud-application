import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _url:string="http://localhost:8080/api/v1/student"

  constructor(private http:HttpClient) { }

  getStudentList():Observable<Student[]>{

    return  this.http.get<Student[]>(this._url);
  }
  addStudent(stduent:Student):Observable<object>{
   return  this.http.post(this._url,stduent);
  }
  getStudentById(id:number):Observable<Student>{
    return this.http.get<Student>(`${this._url}/${id}`);
  }
  studentUpdate(id:number,student:Student):Observable<object>{
     return this.http.put<Student>(`${this._url}/${id}`,student);
  }
  studentDelete(id:number):Observable<Object>{
    return this.http.delete<Student>(`${this._url}/${id}`);
  }

}
