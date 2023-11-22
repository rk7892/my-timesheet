import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsTeamComponent } from './project-details-team.component';

describe('ProjectDetailsTeamComponent', () => {
  let component: ProjectDetailsTeamComponent;
  let fixture: ComponentFixture<ProjectDetailsTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDetailsTeamComponent]
    });
    fixture = TestBed.createComponent(ProjectDetailsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
