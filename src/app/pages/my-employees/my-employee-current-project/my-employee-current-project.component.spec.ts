import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEmployeeCurrentProjectComponent } from './my-employee-current-project.component';

describe('MyEmployeeCurrentProjectComponent', () => {
  let component: MyEmployeeCurrentProjectComponent;
  let fixture: ComponentFixture<MyEmployeeCurrentProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyEmployeeCurrentProjectComponent]
    });
    fixture = TestBed.createComponent(MyEmployeeCurrentProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
