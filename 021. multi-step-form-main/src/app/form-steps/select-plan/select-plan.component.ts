import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlanDuration, Plans} from '../../models/plan.types';

@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.css',
})
export class SelectPlanComponent {
  selectedPlan: Plans = 'Arcade';
  duration: PlanDuration = 'Monthly';

  storePlan() {
    localStorage.setItem('plan', this.selectedPlan);
    localStorage.setItem('duration', this.duration);
  }

  loadPlan() {
    const plan = localStorage.getItem('plan');
    const duration = localStorage.getItem('duration');

    if (plan) this.selectedPlan = plan as Plans;
    if (duration) this.duration = duration as PlanDuration;
  }

  ngOnInit() {
    this.loadPlan();
  }

  changePlan(plan: Plans) {
    this.selectedPlan = plan;
    this.storePlan();
  }

  toggleDuration() {
    this.duration = this.duration === 'Monthly' ? 'Yearly' : 'Monthly';
    this.storePlan();
  }
}
