import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AddOn } from '../../models/addons.interface';
import { SummaryAddon, SummaryPlan } from '../../models/summary.interface';
import { LowercaseTrimPipe } from '../../pipes/lowercase-trim.pipe';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, LowercaseTrimPipe],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent {
  @Output() changePlanRequest = new EventEmitter<void>();
  plan = this.getPlan();
  activeAddons: SummaryAddon[] = this.getAddOns();
  totalPrice = this.calculatePayment();

  getPlan(): SummaryPlan {
    return JSON.parse(localStorage.getItem('plan')!);
  }

  getAddOns() {
    const addons = JSON.parse(localStorage.getItem('selectedAddons')!);
    if (addons) {
      return Object.entries(addons)
        .map(([key, value]) => {
          const addonValue = value as AddOn;
          return {
            name: this.convertToReadableFormat(key),
            active: addonValue.active,
            price: addonValue.price,
          };
        })
        .filter((addon) => addon.active);
    }
    return [];
  }

  // converts the camel case property names to readable format
  convertToReadableFormat(str: string) {
    const words = str.replace(/([A-Z])/g, ' $1').split(' ');
    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  calculatePayment() {
    const addonsTotal = this.activeAddons.reduce(
      (acc, addon) => acc + addon.price,
      0
    );
    console.log(this.plan.price + addonsTotal);
    return this.plan.price + addonsTotal;
  }

  emitChangePlan() {
    this.changePlanRequest.emit();
  }
}
