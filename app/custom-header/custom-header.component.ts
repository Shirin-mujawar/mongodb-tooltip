import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IHeaderParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css']
})
export class CustomHeaderComponent implements IHeaderAngularComp {

 params: any;
 ascSort: string;
 descSort: string;
 noSort: string;
   @ViewChild('menuButton', {read: ElementRef}) public menuButton;

  constructor() { }
  refresh(params: IHeaderParams): boolean {
    throw new Error('Method not implemented.');
  }
  agInit(params: IHeaderParams): void {
    this.params = params;

    // params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));

    // this.onSortChanged();
}

onMenuClicked() {
    this.params.showColumnMenu(this.menuButton.nativeElement);
}

onSortChanged() {
    this.ascSort = this.descSort = this.noSort = 'inactive';
    if (this.params.column.isSortAscending()) {
        this.ascSort = 'active';
    } else if (this.params.column.isSortDescending()) {
        this.descSort = 'active';
    } else {
        this.noSort = 'active';
    }
}

onSortRequested(order: string, event: any) {
    this.params.setSort(order, event.shiftKey);
}
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error('Method not implemented.');
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
  }
  clickHeader(): void {
    alert('Header is clicked');
    console.log('Header is Clicked');
  }

}
