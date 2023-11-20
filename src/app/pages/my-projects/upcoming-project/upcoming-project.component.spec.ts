import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingProjectComponent } from './upcoming-project.component';

describe('UpcomingProjectComponent', () => {
  let component: UpcomingProjectComponent;
  let fixture: ComponentFixture<UpcomingProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingProjectComponent]
    });
    fixture = TestBed.createComponent(UpcomingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
