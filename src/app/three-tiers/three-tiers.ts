import { Component } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AnimateOnScroll } from 'primeng/animateonscroll';

@Component({
  selector: 'app-three-tiers',
  imports: [CommonModule, ButtonModule,AnimateOnScroll],
  templateUrl: './three-tiers.html',
  styleUrl: './three-tiers.css',
})
export class ThreeTiers {

}
