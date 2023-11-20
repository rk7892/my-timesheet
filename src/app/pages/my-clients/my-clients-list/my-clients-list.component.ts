import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-clients-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './my-clients-list.component.html',
  styleUrls: ['./my-clients-list.component.scss']
})
export class MyClientsListComponent {

}
