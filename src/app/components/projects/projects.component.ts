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
      title: 'Project 1',
      description: 'A brief description of project 1. This showcases the main features and purpose of the project.',
      imageUrl: 'assets/project1.jpg',
      tags: ['Angular', 'TypeScript', 'SCSS'],
      additionalInfo: 'This project was developed over the course of 3 months. It involved creating a responsive web application using Angular and integrating with a RESTful API. Key challenges included implementing real-time updates and optimizing performance for large datasets.',
      expanded: false
    },
    {
      title: 'Project 2',
      description: 'Description of project 2. Highlight the key aspects and technologies used in this project.',
      imageUrl: 'assets/project2.jpg',
      tags: ['React', 'Node.js', 'MongoDB'],
      additionalInfo: 'Project 2 was a full-stack application built with React on the frontend and Node.js with MongoDB on the backend. It featured user authentication, real-time data synchronization, and a complex data visualization component.',
      expanded: false
    },
  ];

  toggleProject(project: any) {
    project.expanded = !project.expanded;
  }
}