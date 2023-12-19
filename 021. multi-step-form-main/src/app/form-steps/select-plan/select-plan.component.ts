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
    this.storePlan(); // after loading the plan, if there is no localStorage plan, store the default plan
  }

  storePlan() {
    localStorage.setItem('plan', JSON.stringify(this.plan));
  }

  loadPlan() {
    const plan = localStorage.getItem('plan');

    if (plan) {
      this.plan = JSON.parse(plan);
    } else {
      this.plan = {
        type: 'Arcade',
        duration: 'Monthly',
      };
    }
  }

  changePlanType(plan: Plans) {
    this.plan.type = plan;
    this.storePlan();
  }

  toggleDuration() {
    this.plan.duration =
      this.plan.duration === 'Monthly' ? 'Yearly' : 'Monthly';
    this.storePlan();
  }
}
