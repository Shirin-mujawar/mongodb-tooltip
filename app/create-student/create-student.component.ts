import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidator } from '../libs/form.validators';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  action = 'Add';
  studentData: Student = {} as Student;
  id;
  studentForm = new FormGroup({
    prn: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    phoneNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
    CustomValidator.checkPhoneNumber]),
    email: new FormControl('', [Validators.email]),
    branch: new FormControl('', Validators.required),
    isPlaced: new FormControl('', [Validators.required])

  });
  errorMessage;
  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(res => {
      this.id = res._id;
    });
  }
  ngOnInit(): void {
  }

  addStudent(): void {
    this.studentData.isPlaced = false;
    console.log(this.studentForm.value);
    this.studentData = this.studentForm.value;

    this.errorMessage = '';
    this.studentService.createStudent(this.studentData).subscribe((res) => {
      console.log(res);
      if (res.success) {
        this.router.navigate(['student-details']);
      } else {
        this.errorMessage = res.message;
      }
    }
    );
  }
  getAllStudent(): void {
    this.studentService.getAllStudent().subscribe((res) => {
      console.log(res);
    }
    );
  }
  getStudentDetailsById(): void {
    this.studentService.getStudentDetailById(this.id).subscribe((res: any) => {
      this.studentData = res.data;
    }
    );
  }
}
