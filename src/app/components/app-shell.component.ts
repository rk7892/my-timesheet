import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ViewportService } from 'src/app/services/viewport/viewport.service';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SideNavComponent,
    RouterOutlet,
  ],
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent {
  showSideNav = true;
  constructor(public viwportServ: ViewportService) {
    if(this.viwportServ.device() === 'mobile') {
      this.showSideNav = false;
    }
  }

  toggleSideNav() {
    this.showSideNav = !this.showSideNav;
  }
}
