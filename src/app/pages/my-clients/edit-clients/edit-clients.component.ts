import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-clients',
  standalone: true,
  imports:[MatProgressBarModule,RouterLink,CommonModule],
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.scss']
})
export class EditClientsComponent {

}
