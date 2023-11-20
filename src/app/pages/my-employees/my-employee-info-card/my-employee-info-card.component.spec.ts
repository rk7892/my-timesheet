import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEmployeeInfoCardComponent } from './my-employee-info-card.component';

describe('MyEmployeeInfoCardComponent', () => {
  let component: MyEmployeeInfoCardComponent;
  let fixture: ComponentFixture<MyEmployeeInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyEmployeeInfoCardComponent]
    });
    fixture = TestBed.createComponent(MyEmployeeInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
