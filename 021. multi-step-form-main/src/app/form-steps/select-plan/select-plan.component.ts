import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { Plan, PlanDuration, Plans } from '../../models/plan.types';

@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.css',
})
export class SelectPlanComponent {
  plan!: Plan;

  ngOnInit() {
    this.loadPlan();
  }

  storePlan() {
    localStorage.setItem('plan', JSON.stringify(this.plan));
  }

  loadPlan() {
    const savedPlan = localStorage.getItem('plan');

    if (savedPlan) {
      this.plan = JSON.parse(savedPlan);
    } else {
      this.plan = {
        type: 'Arcade',
        duration: 'Monthly',
        price: 9,
      };
    }

    this.storePlan();
  }

  updatePlan(plan: Plans) {
    this.plan.type = plan;
    switch (this.plan.type) {
      case 'Arcade':
        this.plan.price = this.plan.duration === 'Monthly' ? 9 : 90;
        break;
      case 'Advanced':
        this.plan.price = this.plan.duration === 'Monthly' ? 12 : 120;
        break;
      case 'Pro':
        this.plan.price = this.plan.duration === 'Monthly' ? 15 : 150;
        break;
    }
    this.storePlan();
  }

  toggleDuration() {
    this.plan.duration =
      this.plan.duration === 'Monthly' ? 'Yearly' : 'Monthly';
    this.updatePlan(this.plan.type); // maintain the selected type and update the price since the duration is another
    this.storePlan();
  }
}
