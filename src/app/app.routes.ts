import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  // Add other routes here
  { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page (optional)
];
