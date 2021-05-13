import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
  }
  createStudent(studentData): Observable<any> {
    return this.http.post('http://localhost:5000/api/student/add', studentData);
  }
  getAllStudent(): Observable<any> {
    return this.http.get('http://localhost:5000/api/student');
  }

  getStudentDetailById(id): Observable<any> {
    return this.http.get('http://localhost:5000/api/student/' + id);
  }

  updateStudent(studentData): Observable<any> {
    return this.http.put('http://localhost:5000/api/student/update', studentData);
  }

  deleteStudent(studentData): Observable<any> {
    return this.http.delete('http://localhost:5000/api/student/delete', studentData);
  }
  getColumnTooltip(): Observable<any> {
    return this.http.post('http://localhost:5000/api/student/columntooltip', {});
  }
  updateTooltip(tooltipData): Observable<any> {
    return this.http.put('http://localhost:5000/api/student/update-tooltip', tooltipData);
  }
  // tooltipDetails(tooltipData): Observable<any> {
  //   return this.http.put('http://localhost:5000/api/student/tooltip-details', tooltipData);
  // }
  // getTooltip(id): Observable<any> {
  //   return this.http.get('http://localhost:5000/api/student/details' + id);
 // }

//  getTooltipById(tooltipdata): Observable<any> {
//   return this.http.get('http://localhost:5000/api/student/tooltip', tooltipdata);
// }
}
