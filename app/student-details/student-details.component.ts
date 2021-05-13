import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { ITooltipAngularComp } from 'ag-grid-angular';
import { ITooltipParams } from 'ag-grid-community';
import { GridOptions, ICellRendererParams} from 'ag-grid-community';
import { CustomHeaderComponent } from '../custom-header/custom-header.component';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  // styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  studentData: Student = {} as Student;
   gridApi;
   gridColumnApi;
   frameworkComponents;
   defaultColDef;
   columnDefs;
  // tslint:disable-next-line:max-line-length
  tooltips = [];
  rowData = [];
  constructor(private studentService: StudentService, private router: Router) { }
  ngOnInit(): void {
    this.frameworkComponents = { agColumnHeader: CustomHeaderComponent };
    this.defaultColDef = {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
      headerComponentParams: { menuIcon: 'fa-bars' },
    };
    this.getColumnTooltip();
  }
  setColumnDef(): void {
    this.columnDefs = [
      { field: 'prn', sortable: true , width:  150,  headerName: 'PRN',
      headerTooltip: this.getTooltipByCode('cl01'), filter: true,  suppressMenu: true },
      { field: 'firstName', sortable: true, suppressSizeToFit: true , width:  150,
      headerTooltip: this.getTooltipByCode('cl02'), filter: true,  suppressMenu: true },
      { field: 'lastName', suppressSizeToFit: true , width:  150,
      headerTooltip: this.getTooltipByCode('cl03'), filter: true,  suppressMenu: true},
      { field: 'phoneNo', suppressSizeToFit: true , width:  150,
      headerTooltip: this.getTooltipByCode('cl05'), filter: true,  suppressMenu: true},
      { field: 'email', suppressSizeToFit: true , width:  150,
      headerTooltip: this.getTooltipByCode('cl04'), filter: true,  suppressMenu: true},
      { field: 'branch', suppressSizeToFit: true , width:  150 ,
      headerTooltip: this.getTooltipByCode('cl06'), filter: true,  suppressMenu: true},
      { field: 'isPlaced', suppressSizeToFit: true , width:  150 ,
        headerTooltip: this.getTooltipByCode('cl07'), filter: true, suppressMenu: true
    },
      { field: '_id', suppressSizeToFit: true , width:  100 , headerName: 'Edit',
        cellRenderer: params => {
          return `Edit`;
        },
        onCellClicked: params => {
          this.router.navigate(['/update-student'], {queryParams: {_id: params.value}});
        }
      },
        { field: '_id', suppressSizeToFit: true , suppressMenu: true, width:  100 , headerName: 'Delete',
        cellRenderer: params => {
          return `Delete`;
        },
        onCellClicked: params => {
          this.router.navigate(['/delete-student'], {queryParams: {_id: params.value}});
        }
    }
    ];
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  getAllStudent(): void {
    this.studentService.getAllStudent().subscribe((res) => {
      this.setColumnDef();
      this.rowData = res.data;
      console.log(res.data);
    }
    );
  }

  // Function to get all tooltips
  getColumnTooltip(): void {
    this.studentService.getColumnTooltip().subscribe((res) => {
      this.tooltips = res.data;
      console.log(this.tooltips);
      this.getAllStudent();
    }
    );
  }

  // function to get tooltip for particular column
  // column code is search key each column have column code
  getTooltipByCode(code): string {
    return this.tooltips.find(element => element.columnCode === code).tooltip;
  }

}
