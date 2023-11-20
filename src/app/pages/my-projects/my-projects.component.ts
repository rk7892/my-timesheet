import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';



@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule,RouterLink, MatTabsModule],
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
  
})
export class MyProjectsComponent {

}

