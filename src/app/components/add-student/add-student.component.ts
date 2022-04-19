import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentsService } from '../../students.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  message: boolean = false;

  constructor(private studentsService: StudentsService) { }
  addStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')

  });
  ngOnInit(): void {
  }

  SaveData() {
    //console.log(this.addStudent.value)sdsdsdsd 
    this.studentsService.SaveStudentData(this.addStudent.value).subscribe((result) => {

      //console.log(result)
      this.message = true;
      this.addStudent.reset({});
    });;

  }
  removemessagee(){
    this.message = false;

  }
}
