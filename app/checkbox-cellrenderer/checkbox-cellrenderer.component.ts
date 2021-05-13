import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { IAfterGuiAttachedParams, ICellRendererParams } from 'ag-grid-community';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'checkbox-cell',
  template: `<input type="checkbox" [checked]="params.value" (change)="onChange($event)">
  <input type="text">`
})
export class CheckboxCellrendererComponent implements ICellRendererAngularComp {

  public params: ICellRendererParams;

  constructor() { }

  agInit(params: ICellRendererParams): void {
      this.params = params;
  }

  public onChange(event) {
      this.params.data[this.params.colDef.field] = event.currentTarget.checked;

  }

  refresh(params: ICellRendererParams): boolean {
      return true;
  }
}
