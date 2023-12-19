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

    const plan = localStorage.getItem('plan');
    if(plan) {
      const parsedPlan: Plan = JSON.parse(plan);
      this.planDuration = parsedPlan.duration;
    }
  }

  saveAddons() {
    localStorage.setItem('selectedAddons', JSON.stringify(this.selectedAddons));
  }

  loadAddons() {
    const savedAddons = localStorage.getItem('selectedAddons');

    if (savedAddons) {
      this.selectedAddons = JSON.parse(savedAddons);
    } else {
      this.selectedAddons = {
        onlineService: false,
        extraStorage: false,
        customProfile: false,
      };
    }
  }

  toggleAddon(addon: keyof AddOns) {
    this.selectedAddons[addon] = !this.selectedAddons[addon];
    this.saveAddons();
  }
}
