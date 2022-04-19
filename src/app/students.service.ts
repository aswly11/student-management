import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './models/student/student';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url: string = "http://localhost:3000/students";
  constructor(private http: HttpClient) { }

  getALlStudent():Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }
  SaveStudentData(data: Student) {
    // console.log(data)
    return this.http.post(this.url, data);
  }
  UpdateStudentData(id:number,data: Student)
  {
    return this.http.put(`${this.url}/${id}`,data);
  }
  deletestudent(id:number)
  {
    return this.http.delete(`${this.url}/${id}`);
  }
  getStudentById(id:number)
  {
    return this.http.get(`${this.url}/${id}`);
  }
}
