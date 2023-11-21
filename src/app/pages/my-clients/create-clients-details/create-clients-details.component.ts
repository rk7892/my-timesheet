import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-create-clients-details',
  standalone: true,
  imports: [CommonModule,RouterLink,MatIconModule],
  templateUrl: './create-clients-details.component.html',
  styleUrls: ['./create-clients-details.component.scss']
})
export class CreateClientsDetailsComponent {

}
