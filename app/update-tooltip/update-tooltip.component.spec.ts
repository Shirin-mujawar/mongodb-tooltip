import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTooltipComponent } from './update-tooltip.component';

describe('UpdateTooltipComponent', () => {
  let component: UpdateTooltipComponent;
  let fixture: ComponentFixture<UpdateTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
