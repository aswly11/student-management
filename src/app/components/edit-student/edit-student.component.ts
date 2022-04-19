import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentsService } from '../../students.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  message: boolean = false;

  constructor(private studentsService: StudentsService, private router: ActivatedRoute) { }
  editStudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')

  });
  ngOnInit(): void {

    this.studentsService.getStudentById(this.router.snapshot.params['id']).subscribe((result:any) => {

      console.log(result);
      this.editStudent= new FormGroup({
        name: new FormControl(result.name),
        email: new FormControl(result.email)
    
      });

    })
  }

  UpdateData() {
    //console.log(this.addStudent.value)
    this.studentsService.UpdateStudentData(this.router.snapshot.params['id'],this.editStudent.value).subscribe((result) => {

      //console.log(result)
      this.message = true;
      this.editStudent.reset({});
    });;

  }
  removemessagee() {
    this.message = false;

  }
}
