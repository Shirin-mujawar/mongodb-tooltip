import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxCellrendererComponent } from './checkbox-cellrenderer.component';

describe('CheckboxCellrendererComponent', () => {
  let component: CheckboxCellrendererComponent;
  let fixture: ComponentFixture<CheckboxCellrendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxCellrendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxCellrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
