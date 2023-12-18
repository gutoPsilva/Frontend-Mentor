import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { YourInfoComponent } from '../form-steps/your-info/your-info.component';
import Steps from '../models/steps.type';

@Component({
  selector: 'app-mobile-footer-nav',
  standalone: true,
  imports: [],
  templateUrl: './mobile-footer-nav.component.html',
  styleUrl: './mobile-footer-nav.component.css',
})
export class MobileFooterNavComponent {
  @Input() step!: Steps;
  @Output() formSubmitRequest = new EventEmitter<void>();

  emitFormSubmit() {
    this.formSubmitRequest.emit();
  }
}
