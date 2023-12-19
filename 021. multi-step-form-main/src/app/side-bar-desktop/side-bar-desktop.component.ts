import { Component, Input } from '@angular/core';
import { Steps } from '../models/info.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar-desktop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar-desktop.component.html',
  styleUrl: './side-bar-desktop.component.css',
})
export class SideBarDesktopComponent {
  @Input() step!: Steps;
}
