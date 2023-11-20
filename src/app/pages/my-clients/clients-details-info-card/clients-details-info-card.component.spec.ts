import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsDetailsInfoCardComponent } from './clients-details-info-card.component';

describe('ClientsDetailsInfoCardComponent', () => {
  let component: ClientsDetailsInfoCardComponent;
  let fixture: ComponentFixture<ClientsDetailsInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsDetailsInfoCardComponent]
    });
    fixture = TestBed.createComponent(ClientsDetailsInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
