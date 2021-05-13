import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDetailsComponent } from './tooltip-details.component';

describe('TooltipDetailsComponent', () => {
  let component: TooltipDetailsComponent;
  let fixture: ComponentFixture<TooltipDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
