import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-timesheet',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './my-timesheet.component.html',
  styleUrls: ['./my-timesheet.component.scss']
})
export class MyTimesheetComponent {

}
