import { Component } from '@angular/core';
import { AddOns } from '../../models/addons.interface';
import { CommonModule } from '@angular/common';
import { Plan, PlanDuration } from '../../models/plan.types';

@Component({
  selector: 'app-add-ons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-ons.component.html',
  styleUrl: './add-ons.component.css',
})
export class AddOnsComponent {
  selectedAddons!: AddOns;
  planDuration!: PlanDuration;

  ngOnInit() {
    this.loadAddons();
    this.saveAddons(); // after loading the addons, if there is no localStorage addons, store the default addons
  }

  loadPlan() {
    const plan = localStorage.getItem('plan');
    if (plan) {
      const parsedPlan: Plan = JSON.parse(plan);
      this.planDuration = parsedPlan.duration;
    }
  }

  saveAddons() {
    this.loadPlan(); // in case the plan duration has changed before the addons are saved
    localStorage.setItem('selectedAddons', JSON.stringify(this.selectedAddons));
  }

  loadAddons() {
    this.loadPlan();
    const savedAddons = localStorage.getItem('selectedAddons');

    if (savedAddons) {
      this.selectedAddons = JSON.parse(savedAddons);

      // if i didn't update each addon's price here, the price would be the same as the plan duration when the user first selected the addon, so it would maintain only yearly or monthly prices
      this.selectedAddons.onlineService.price =
        this.planDuration === 'Monthly' ? 1 : 10;
      this.selectedAddons.largerStorage.price =
        this.planDuration === 'Monthly' ? 2 : 20;
      this.selectedAddons.customizableProfile.price =
        this.planDuration === 'Monthly' ? 2 : 20;
    } else {
      // default values
      this.selectedAddons = {
        onlineService: {
          active: false,
          price: this.planDuration === 'Monthly' ? 1 : 10,
        },
        largerStorage: {
          active: false,
          price: this.planDuration === 'Monthly' ? 2 : 20,
        },
        customizableProfile: {
          active: false,
          price: this.planDuration === 'Monthly' ? 2 : 20,
        },
      };
    }
  }

  toggleAddonOnSpace(event: KeyboardEvent, addon: keyof AddOns) {
    if (event.key === ' ' || event.key === 'Enter') {
      this.toggleAddon(addon);
      event.preventDefault();
    }
  }

  toggleAddon(addon: keyof AddOns) {
    this.selectedAddons[addon].active = !this.selectedAddons[addon].active;
    this.saveAddons();
  }
}
