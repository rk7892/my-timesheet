import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MyEmployeeInfoCardComponent } from '../my-employee-info-card/my-employee-info-card.component';
import { MyEmployeeCurrentProjectComponent } from '../my-employee-current-project/my-employee-current-project.component';
import { MyEmployeeTimesheetComponent } from '../my-employee-timesheet/my-employee-timesheet.component';


@Component({
  selector: 'app-my-employee-info',
  templateUrl: './my-employee-info.component.html',
  styleUrls: ['./my-employee-info.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MyEmployeeInfoCardComponent,
    MyEmployeeCurrentProjectComponent,
    MyEmployeeTimesheetComponent
  ]
})
export class MyEmployeeInfoComponent {

  
  links = [
    { label: 'employee-current-project', link: 'employee-current-project' },
    { label: 'employee-timesheet', link: 'employee-timesheet' },
  ];
}
