import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '*',
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '*',
        overflow: 'hidden'
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})

export class ProjectsComponent {
  projects = [
    {
      title: 'Racist Project',
      description: 'Undisclosed efforts to fortify the class system within the united states',
      imageUrl: 'undisclosed.png',
      tags: ['Get Rich', 'Implement Power', 'Control'],
      additionalInfo: 'This project was developed over the course of 3 months. It involved things the average person would never think about. Let\'s just say I think a little differently than most others.',
      expanded: false
    },
    {
      title: 'Extreme Racism Project',
      description: 'Details of this project may be unvealed in time...',
      imageUrl: 'secret.png',
      tags: ['Unfathomable horrors', 'Darkness', 'Anguish'],
      additionalInfo: 'Extreme Racism Project was a multi-year effort with long lasting socio-economical implications. Results to be with you and many otherssoon!',
      expanded: false
    },
  ];

  toggleProject(project: any) {
    project.expanded = !project.expanded;
  }
}