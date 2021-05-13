import { Component, OnInit, ViewChild } from '@angular/core';
import { Tooltip } from '../models/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-update-tooltip',
  templateUrl: './update-tooltip.component.html',
  styleUrls: ['./update-tooltip.component.css']
})
export class UpdateTooltipComponent implements OnInit {
  tooltipData: any  = [] as Tooltip[];
  gridApi;
   gridColumnApi;
   frameworkComponents;
   defaultColDef;
   id;
   i = 0;
   data;
  tooltips: any = [];
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
  // tslint:disable-next-line:max-line-length
  constructor( private studentService: StudentService, private activatedRoute: ActivatedRoute,  private router: Router) {
    this.activatedRoute.queryParams.subscribe(res => {
        this.id = res._id;
    });
  }
  ngOnInit(): void {
    this.getColumnTooltip();
  }
    updateTooltip(): void {
    this.studentService.updateTooltip(this.tooltipData[0]).subscribe((res) => {
      console.log(res.message);
      console.log(res.success);
      if (res.success) {
        this.router.navigate(['/tooltip-details']);
      } else {
        console.log(res.message);
      }
    }
    );
  }
  getColumnTooltip(): void {
    this.studentService.getColumnTooltip().subscribe((res) => {
      this.tooltips = res.data;
      console.log('Id is' + this.id);
      console.log(this.tooltips);
      this.tooltipData =  this.tooltips.filter(a => a._id === this.id );
      console.log(this.tooltipData);
    }
    );
  }
}
