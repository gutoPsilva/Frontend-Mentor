import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideBarMobileComponent } from './side-bar-mobile/side-bar-mobile.component';
import { SideBarDesktopComponent } from './side-bar-desktop/side-bar-desktop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideBarMobileComponent, SideBarDesktopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'multi-step-form-main';
}
