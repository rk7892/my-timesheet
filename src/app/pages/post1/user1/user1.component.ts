import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user1',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.scss']
})
export class User1Component {

}
