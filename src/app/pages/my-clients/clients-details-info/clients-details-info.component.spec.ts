import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsDetailsInfoComponent } from './clients-details-info.component';

describe('ClientsDetailsInfoComponent', () => {
  let component: ClientsDetailsInfoComponent;
  let fixture: ComponentFixture<ClientsDetailsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsDetailsInfoComponent]
    });
    fixture = TestBed.createComponent(ClientsDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
