import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Steps } from './models/info.types';
import { YourInfoComponent } from './form-steps/your-info/your-info.component';
import { MobileFooterNavComponent } from './mobile-footer-nav/mobile-footer-nav.component';
import { SideBarDesktopComponent } from './side-bar-desktop/side-bar-desktop.component';
import { SideBarMobileComponent } from './side-bar-mobile/side-bar-mobile.component';
import { SelectPlanComponent } from './form-steps/select-plan/select-plan.component';
import { AddOnsComponent } from './form-steps/add-ons/add-ons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SideBarMobileComponent,
    SideBarDesktopComponent,
    YourInfoComponent,
    SelectPlanComponent,
    AddOnsComponent,
    MobileFooterNavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentStep: Steps = 1;

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === 'ArrowRight') this.nextStep();
    if (event.key === 'ArrowLeft') this.returnStep();
  }

  @ViewChild(YourInfoComponent) yourInfoComponent!: YourInfoComponent;
  @ViewChild(SelectPlanComponent) selectPlanComponent!: SelectPlanComponent;

  nextStep() {
    if (this.currentStep === 1) {
      // personalInfo form submitted
      const validForm = this.yourInfoComponent.submitForm();

      if (validForm) {
        this.yourInfoComponent.storeInfo(); // save form data to localStorage
        this.currentStep = 2; // increment step if form is valid
      }
    } else if (this.currentStep === 2) {
      this.currentStep = 3;
    } else if (this.currentStep === 3) {
      this.currentStep = 4;
    }
  }

  returnStep() {
    if (this.currentStep > 1) this.currentStep -= 1;
  }
}
