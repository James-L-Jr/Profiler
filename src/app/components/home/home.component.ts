import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  imagePath = environment.imagePath;

  constructor() {
    document.documentElement.style.setProperty('--image-path', this.imagePath);
  }
}
