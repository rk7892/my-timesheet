import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEmployeeListComponent } from './my-employee-list.component';

describe('MyEmployeeListComponent', () => {
  let component: MyEmployeeListComponent;
  let fixture: ComponentFixture<MyEmployeeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyEmployeeListComponent]
    });
    fixture = TestBed.createComponent(MyEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
