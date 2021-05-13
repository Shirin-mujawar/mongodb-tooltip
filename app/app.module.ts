import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AgGridModule } from 'ag-grid-angular';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { UpdateTooltipComponent } from './update-tooltip/update-tooltip.component';
import { TooltipDetailsComponent } from './tooltip-details/tooltip-details.component';
import { CheckboxCellrendererComponent } from './checkbox-cellrenderer/checkbox-cellrenderer.component';
import { ExportGridComponent } from './export-grid/export-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    DeleteStudentComponent,
    UpdateStudentComponent,
    CustomHeaderComponent,
    UpdateTooltipComponent,
    TooltipDetailsComponent,
    CheckboxCellrendererComponent,
    ExportGridComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([CustomHeaderComponent, CheckboxCellrendererComponent])
    // AgGridModule.withComponents([CustomHeaderComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
