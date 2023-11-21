import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-completed-project',
  standalone: true,
  
  imports:[MatProgressBarModule,RouterLink,CommonModule],
  templateUrl: './completed-project.component.html',
  styleUrls: ['./completed-project.component.scss']
})
export class CompletedProjectComponent {

}
