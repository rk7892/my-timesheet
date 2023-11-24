import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule,RouterModule, MatMenuModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Input() isMobile: boolean = false;
  @Input() show: boolean = true;
  constructor() {}
}
