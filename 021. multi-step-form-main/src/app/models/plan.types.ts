export type Plans = 'Arcade' | 'Advanced' | 'Pro';
export type PlanDuration = 'Monthly' | 'Yearly';

export interface Plan {
  type: Plans;
  duration: PlanDuration;
}
