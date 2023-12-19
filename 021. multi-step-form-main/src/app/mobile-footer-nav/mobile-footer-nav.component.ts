import { Component, EventEmitter, Input, Output } from '@angular/core';
import Steps from '../models/info.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-footer-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-footer-nav.component.html',
  styleUrl: './mobile-footer-nav.component.css',
})
export class MobileFooterNavComponent {
  @Input() step!: Steps;
  @Output() formSubmitRequest = new EventEmitter<void>();
  @Output() returnStepRequest = new EventEmitter<void>();

  emitFormSubmit() {
    this.formSubmitRequest.emit();
  }

  emitReturnStep() {
    this.returnStepRequest.emit();
  }
}
