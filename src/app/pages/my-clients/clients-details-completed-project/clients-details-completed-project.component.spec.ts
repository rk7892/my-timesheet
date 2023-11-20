import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsDetailsCompletedProjectComponent } from './clients-details-completed-project.component';

describe('ClientsDetailsCompletedProjectComponent', () => {
  let component: ClientsDetailsCompletedProjectComponent;
  let fixture: ComponentFixture<ClientsDetailsCompletedProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsDetailsCompletedProjectComponent]
    });
    fixture = TestBed.createComponent(ClientsDetailsCompletedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
