import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  studentData: Student = {} as Student;
  id;
  errorMessage;
  constructor( private studentService: StudentService, private activatedRoute: ActivatedRoute,  private router: Router) {
    this.activatedRoute.queryParams.subscribe(res => {
        this.id = res._id;
    });
  }

  ngOnInit(): void {
    if ( this.id ) {
     // this.action = 'Delete';
      this.getStudentDetailsById();
    }
  }
  getStudentDetailsById(): void {
    this.studentService.getStudentDetailById(this.id).subscribe((res: any ) => {
    this.studentData = res.data;
  }
    );
  }
  updateStudent(): void {
    this.studentService.updateStudent(this.studentData).subscribe((res) => {
      console.log(res);
      if (res.success) {
        this.router.navigate(['student-details']);
      } else {
        this.errorMessage = res.message;
      }
    }
    );
  }
}
