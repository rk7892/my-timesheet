import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-upcoming-project',
  standalone: true,
  imports:[MatProgressBarModule,RouterLink,CommonModule],
  templateUrl: './upcoming-project.component.html',
  styleUrls: ['./upcoming-project.component.scss']
})
export class UpcomingProjectComponent {

}
