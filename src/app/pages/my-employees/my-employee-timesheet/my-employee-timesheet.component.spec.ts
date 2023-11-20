import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEmployeeTimesheetComponent } from './my-employee-timesheet.component';

describe('MyEmployeeTimesheetComponent', () => {
  let component: MyEmployeeTimesheetComponent;
  let fixture: ComponentFixture<MyEmployeeTimesheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyEmployeeTimesheetComponent]
    });
    fixture = TestBed.createComponent(MyEmployeeTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
