import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student/student';
import { StudentsService } from '../../students.service'
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  studentdata: Student[] =[];
  constructor(private students: StudentsService) { }

  ngOnInit(): void {
    this.students.getALlStudent().subscribe((alldata:Student[]) => {

      console.log(alldata);
      this.studentdata = alldata;

    });
  }
  deleteStudent(id: number) {
   // console.log(id)
    this.students.deletestudent(id).subscribe((result) => {

      //console.log(result);
this.ngOnInit();
    })
  }
}
