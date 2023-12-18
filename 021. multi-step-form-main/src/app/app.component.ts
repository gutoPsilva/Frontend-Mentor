import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideBarMobileComponent } from './side-bar-mobile/side-bar-mobile.component';
import { SideBarDesktopComponent } from './side-bar-desktop/side-bar-desktop.component';
import { YourInfoComponent } from './form-steps/your-info/your-info.component';
import { MobileFooterNavComponent } from './mobile-footer-nav/mobile-footer-nav.component';
import Steps from './models/steps.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SideBarMobileComponent,
    SideBarDesktopComponent,
    YourInfoComponent,
    MobileFooterNavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentStep: Steps = 1;

  @ViewChild(YourInfoComponent) yourInfoComponent!: YourInfoComponent;

  formSubmit() {
    console.log('submitting');
    if(this.currentStep === 1) { // personalInfo form submitted
      console.log(this.yourInfoComponent.infoForm.value);
      const validForm = this.yourInfoComponent.submitForm();

      if(validForm) this.currentStep++; // increment step if form is valid
    }
  }
}
