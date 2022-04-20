import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student/student';
import { StudentsService } from '../../students.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  message: boolean = false;
  Errmessage: boolean = false;

  constructor(private studentsService: StudentsService) { }
  addStudent = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[ Validators.required,Validators.email])

  });
  ngOnInit(): void {
  }

  get email(){return this.addStudent.get('email')}
  get name(){return this.addStudent.get('name')}
  SaveData() {
    if(this.addStudent.invalid)
    {
      this.Errmessage=true;
      return
    }
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
  removemErressagee(){
    this.Errmessage = false;

  }
}
