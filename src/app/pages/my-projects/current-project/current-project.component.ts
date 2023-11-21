import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-current-project',
  standalone: true,
  imports:[MatProgressBarModule,RouterLink,CommonModule],
  templateUrl: './current-project.component.html',
  styleUrls: ['./current-project.component.scss']
})
export class CurrentProjectComponent {

}
