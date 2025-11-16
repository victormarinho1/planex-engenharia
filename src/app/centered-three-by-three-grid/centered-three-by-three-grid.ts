import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AnimateOnScroll } from 'primeng/animateonscroll';
@Component({
  selector: 'app-centered-three-by-three-grid',
  imports: [CommonModule, ButtonModule,AnimateOnScroll],
  templateUrl: './centered-three-by-three-grid.html',
  styleUrl: './centered-three-by-three-grid.css',
})
export class CenteredThreeByThreeGrid {

}
