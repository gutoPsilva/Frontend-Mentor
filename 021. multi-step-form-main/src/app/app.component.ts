import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideBarMobileComponent } from './side-bar-mobile/side-bar-mobile.component';
import { SideBarDesktopComponent } from './side-bar-desktop/side-bar-desktop.component';
import { YourInfoComponent } from './form-steps/your-info/your-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SideBarMobileComponent,
    SideBarDesktopComponent,
    YourInfoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentStep: 1 | 2 | 3 | 4 | 5 = 1;
}
