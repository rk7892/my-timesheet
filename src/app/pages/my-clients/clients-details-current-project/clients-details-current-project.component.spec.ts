import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsDetailsCurrentProjectComponent } from './clients-details-current-project.component';

describe('ClientsDetailsCurrentProjectComponent', () => {
  let component: ClientsDetailsCurrentProjectComponent;
  let fixture: ComponentFixture<ClientsDetailsCurrentProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsDetailsCurrentProjectComponent]
    });
    fixture = TestBed.createComponent(ClientsDetailsCurrentProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
