import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { ThreeTiers } from './three-tiers/three-tiers';
import { CenteredThreeByThreeGrid } from "./centered-three-by-three-grid/centered-three-by-three-grid";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ThreeTiers, CenteredThreeByThreeGrid],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('planex-engenharia');
}
