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
      title: 'Portfolio Website - 2024',
      description: 'Angular based portfolio website to demonstrate an accessible and stylized collection of personal and professional experiences.',
      imageUrl: 'angular2.png',
      tags: ['Angular', 'Spring Boot', 'MSSQL', 'HTML', 'SCSS', 'TypeScript', 'Insomnia'],
      additionalInfo: 'Angular and Spring Boot portfolio website integrates seamlessly with MSSQL, ' +
                      'leveraging Angular Material for UI and Spring Boot for RESTful services, JPA database interactions, ' +
                      'and routing, ensuring a streamlined and scalable web solution.',
      expanded: false
    },
    {
      title: 'Plant Device Observability - 2024',
      description: 'A near real-time health and performance observability platform for manufacturing plants in the U.S. and South America.',
      imageUrl: 'grafana.png',
      tags: ['Grafana', 'Victoria Metrics', 'PostgreSQL','VMagent', 'Kubernetes', 'Alerting'],
      additionalInfo: 'Robust web-hosted observability platform tailored for manufacturing plants, ' + 
                      'featuring more than 24 intuitive Grafana dashboards and 200 data visualizations designed to present critical data clearly to plant workers. ' +
                      'The system utilized a well-tuned VictoriaMetrics configuration for efficient time-series data storage and querying, ensuring high performance and scalability. ' +
                      'Deployment managed via Kubernetes, while PostgreSQL served as the database backbone for Grafana, enhancing data management and security.',
      expanded: false
    },
    {
      title: 'Assessibility testing - 2024',
      description: 'Automated accessibility testing on a web application for a fortune 500 company.',
      imageUrl: 'axe-core.png',
      tags: ['Javascript', 'Jest', 'Jest-axe','Node.js', 'Dev Tools'],
      additionalInfo: 'Comprehensive singl-e-click pipelines for Azure Cloud deployment and CI/CD tools.' + 
                      'SonarQube, Fortify, Open Source Scanning software implemented with scheduled automation tasks. ' +
                      'Custom control over the environment used, approval workflow, and enhanced logging by environment. ' +
                      'Apply application settings from a secure vault to the Azure service simultaneously with deployment.',
      expanded: false
    },
    {
      title: 'Azure Cloud Computing - 2023',
      description: 'Adopt CI/CD automation processes for an application with an invested $50 million in support of manufacturing operations.',
      imageUrl: 'azure.png',
      tags: ['Azure DevOps', 'Azure Cloud', 'Azure App Service','Azure CLI', 'YAML', 'PowerShell'],
      additionalInfo: 'Comprehensive single-click pipelines for Azure Cloud deployment and CI/CD tools.' + 
                      'SonarQube, Fortify, Open Source Scanning software implemented with scheduled automation tasks. ' +
                      'Custom control over the environment used, approval workflow, and enhanced logging by environment. ' +
                      'Apply application settings from a secure vault to the Azure service simultaneously with deployment.',
      expanded: false
    },
  ];

  toggleProject(project: any) {
    project.expanded = !project.expanded;
  }
}