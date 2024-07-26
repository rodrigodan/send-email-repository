import { Component } from '@angular/core';
import { NavbarComponent } from '../shared-components/navbar/navbar.component';

@Component({
  selector: 'app-main-navbar',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.css',
})
export class MainNavbarComponent {
  menuItems = [
    {
      label: 'Home',
      routerLink: ['/home'],
      routerLinkActive: 'active',
      routerLinkActiveOptions: '{ exact: true }',
    },
    {
      label: 'About',
      routerLink: ['/about'],
      routerLinkActive: 'active',
      routerLinkActiveOptions: '{ exact: true }',
    },
  ];
}
