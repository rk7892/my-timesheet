import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-details-task',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './project-details-task.component.html',
  styleUrls: ['./project-details-task.component.scss']
})
export class ProjectDetailsTaskComponent {

}
