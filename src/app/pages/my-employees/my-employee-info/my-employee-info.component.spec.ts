import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEmployeeInfoComponent } from './my-employee-info.component';

describe('MyEmployeeInfoComponent', () => {
  let component: MyEmployeeInfoComponent;
  let fixture: ComponentFixture<MyEmployeeInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyEmployeeInfoComponent]
    });
    fixture = TestBed.createComponent(MyEmployeeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
