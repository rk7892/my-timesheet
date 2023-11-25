import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-employee-current-project',
  templateUrl: './my-employee-current-project.component.html',
  styleUrls: ['./my-employee-current-project.component.scss'],
  standalone: true,
  imports:[MatProgressBarModule,RouterLink,CommonModule],
  

})
export class MyEmployeeCurrentProjectComponent {

}
