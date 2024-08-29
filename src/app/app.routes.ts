import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'projects', component: ProjectsComponent },
  // Add other routes here
  { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page (optional)
];
