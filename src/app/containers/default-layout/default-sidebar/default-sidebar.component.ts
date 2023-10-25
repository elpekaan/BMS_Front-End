import { AuthService } from './../../../../core/services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-default-sidebar',
  templateUrl: './default-sidebar.component.html',
  styleUrls: ['./default-sidebar.component.scss']
})
export class DefaultSidebarComponent {
  constructor(private authService: AuthService){

  }
  isAdmin(): boolean {
    const userType = this.authService.getUserType();
    return userType === 0;
  }

  isTeamlead(): boolean {
    const userType = this.authService.getUserType();
    return userType === 1;
  }

  isDeveloper(): boolean {
    const userType = this.authService.getUserType();
    return userType === 2;
  }
}
