import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateTooltipComponent } from './update-tooltip/update-tooltip.component';
import { TooltipDetailsComponent } from './tooltip-details/tooltip-details.component';
import { ExportGridComponent } from './export-grid/export-grid.component';

const routes: Routes = [
{
  path: 'student-details',
  component: StudentDetailsComponent
},
{
path: 'create-student',
component: CreateStudentComponent
},
{
  path: 'delete-student',
  component: DeleteStudentComponent
},
{
  path: 'update-student',
  component: UpdateStudentComponent
},
{
  path: 'update-tooltip',
  component: UpdateTooltipComponent
},
{
  path: 'tooltip-details',
  component: TooltipDetailsComponent
},
{
  path: 'export-grids',
  component: ExportGridComponent
},
{
  path: '**',
  pathMatch: 'full',
  redirectTo: 'student-details'

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
