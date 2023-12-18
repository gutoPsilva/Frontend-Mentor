import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import Steps from '../models/steps.type';

@Component({
  selector: 'app-side-bar-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar-mobile.component.html',
  styleUrl: './side-bar-mobile.component.css',
})
export class SideBarMobileComponent {
  @Input() step!: Steps;
}
