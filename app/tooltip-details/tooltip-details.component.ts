import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { CheckboxCellrendererComponent } from '../checkbox-cellrenderer/checkbox-cellrenderer.component';
import { AgGridAngular } from 'ag-grid-angular';
@Component({
  selector: 'app-tooltip-details',
  templateUrl: './tooltip-details.component.html',
  styleUrls: ['./tooltip-details.component.css']
})
export class TooltipDetailsComponent implements OnInit {
  @ViewChild('exampleGrid', {static: false}) agGrid: AgGridAngular;

  gridApi;
   gridColumnApi;
   defaultColDef;
  // tslint:disable-next-line:max-line-length
  columnCode = [{
    columnCode : 'cl01'
  }
  ,
  {
    columnCode : 'cl02'
  },
  {
    columnCode : 'cl03'
  },
  {
    columnCode : 'cl04'
  },
  {
    columnCode : 'cl05'
  },
  {
    columnCode : 'cl06'
  },
  {
    columnCode : 'cl07'
  }
];
  tooltips = [];
  columnDefs = [
    { field: 'columnCode', sortable: true , width:  150,  headerName: 'columnCode', filter: true,  suppressMenu: true, flex: 1 },
    { field: 'columnName', sortable: true, suppressSizeToFit: true , width:  150, filter: true,  suppressMenu: true, flex: 1 },
    { field: 'tooltip', suppressSizeToFit: true , width:  150, filter: true,  suppressMenu: true, flex: 2},
    { field: '_id', suppressSizeToFit: true , width:  100 , headerName: 'Edit',
      // cellRenderer: params => {
      //   return `Edit`;
      // },
      // onCellClicked: params => {
      //   this.router.navigate(['/update-student'], {queryParams: {_id: params.value}});
      // }
    //   minWidth: 180,
    //  // headerCheckboxSelection: true,
    //   headerCheckboxSelectionFilteredOnly: true,
      // checkboxSelection: true,

      // headerCheckboxSelection: true,
      // headerCheckboxSelectionFilteredOnly: true,
      // checkboxSelection: true,
      cellRenderer: params => {
          // tslint:disable-next-line:label-position
          return `<input type="checkbox">`;
        },
        onCellClicked: params => {
           this.router.navigate(['/update-tooltip'], {queryParams: {_id: params.value}});
           },
        // onCellClicked: (event: any) => {
        //   // tslint:disable-next-line:no-unused-expression
        //   ('#grid2');
        // },
    },
  //   { field: '_id', suppressSizeToFit: true , width:  100 , headerName: 'Check', cellRenderer: 'checkboxCellRenderer' }
  // ];
  // frameworkComponents = {
  //   checkboxCellRenderer: CheckboxCellrendererComponent
  // };
];
  rowData = [];
  onCellClicked(event) {
    console.log('(event', event);
}
  constructor(private studentService: StudentService, private router: Router) { }
  ngOnInit(): void {
    this.getTooltip();
  }

  getTooltip(): void {
    console.log('getTooltip');
    this.studentService.getColumnTooltip().subscribe((res) => {
      this.tooltips = res.data;
      console.log(this.tooltips);
      this.rowData = res.data;
    }
    );
  }
    getTooltipByCode(code): string {
    return this.tooltips.find(element => element.columnCode === code);
  }


  // onRowSelected(event) {
  //   console.log(event);
  //   console.log(event.node.selected);
  //   console.log(event.rowIndex);
  // }

  // onSelectionChanged(event) {
  //   console.log(event); // verify that the method is fired upon selection
  //   // do the rest
  // }
}
