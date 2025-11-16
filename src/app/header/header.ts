import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [Button,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
darkMode: any;
toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
    this.darkMode = !this.darkMode;
}

}
