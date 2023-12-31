import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clients-details-current-project',
  standalone: true,
  imports:[MatProgressBarModule,RouterLink,CommonModule],
  templateUrl: './clients-details-current-project.component.html',
  styleUrls: ['./clients-details-current-project.component.scss']
})
export class ClientsDetailsCurrentProjectComponent {

}
