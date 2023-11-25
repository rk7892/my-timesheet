import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-employee-timesheet',
  templateUrl: './my-employee-timesheet.component.html',
  styleUrls: ['./my-employee-timesheet.component.scss'],
  standalone: true,
  imports:[MatProgressBarModule,RouterLink,CommonModule],
})
export class MyEmployeeTimesheetComponent {

}
