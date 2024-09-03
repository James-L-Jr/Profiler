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
      additionalInfo: 'Angular and Spring Boot portfolio website integrating seamlessly with MSSQL. ' +
                      'Leverages Angular Material for UI and Spring Boot for RESTful services, JPA database interactions, ' +
                      'and routing, ensuring a streamlined and scalable web solution for building web portfolios.',
      expanded: false
    },
    {
      title: 'Plant Device Observability - 2024',
      description: 'A near real-time health and performance observability platform for manufacturing plants in the U.S. and South America.',
      imageUrl: 'grafana.png',
      tags: ['Grafana', 'Victoria Metrics', 'PostgreSQL', 'Kubernetes', 'Alerting'],
      additionalInfo: 'Robust web-hosted observability platform tailored for manufacturing plants. ' + 
                      'Contributed to more than ten intuitive Grafana dashboards and 100 data visualizations designed to present critical data clearly to plant workers. ' +
                      'Utilized a well-tuned VictoriaMetrics configuration for efficient time-series data storage and querying, ensuring high performance and scalability. ' +
                      'Deployment managed via Kubernetes, while PostgreSQL served as the database backbone for Grafana, enhancing data management and security.',
      expanded: false
    },
    {
      title: 'Assessibility Testing - 2024',
      description: 'Automated accessibility testing on a web application for a fortune 500 company.',
      imageUrl: 'axe-core.png',
      tags: ['Typescript', 'Jest', 'Jest-axe','Node.js', 'Dev Tools'],
      additionalInfo: 'Jest-oriented automated testing framework for an angular application reaching testing validation goals. ' + 
                      'Established test beds to simulate application environments and perform unit and accessibility testing. ' +
                      'Axe-core integration via Jest-axe to verify compliance wtih WCAG standards.',
      expanded: false
    },
    {
      title: 'Victoria Metrics Research - 2024',
      description: 'Upgrade Victoria Metrics to a more effective and efficient time-series database.',
      imageUrl: 'kubernetes.png',
      tags: ['Kubernetes', 'Victoria Metrics', 'VMagent', 'Azure pipelines', 'Microsoft Excel', 'Teams'],
      additionalInfo: 'Provide a proof of concept implementation of the VictoriaMetrics cluster version as part of efforts to explore upgrades to time-series database systems. ' + 
                      'In-depth research of best practices and implementation strategies for the deployment and cluster configuration to load balance a scalable, high-performance solution. ' +
                      'Configurations managed by precise pipeline files and manifests, balancing VM operations for peak performance and efficient resource utilization.' +
                      'Isolated test environment successfully demonstrating the cluster handling a data volume with no errors or loss of data. ' +
                      'Highly detailed documentation that delineates performance contrasts between versions and provides a step-by-step implementation guide for the VM cluster solution.',
      expanded: false
    },
    {
      title: 'Azure Cloud Computing - 2023',
      description: 'Adopt CI/CD automation processes for an application with an invested $50 million in support of manufacturing operations.',
      imageUrl: 'azure.png',
      tags: ['Azure DevOps', 'Azure Cloud', 'Azure App Service','Azure CLI', 'YAML', 'PowerShell'],
      additionalInfo: 'Comprehensive single-click pipelines for Azure Cloud deployment and CI/CD tools. ' +
                      'SonarQube, Fortify, Open Source Scanning software implemented with scheduled automation tasks. ' +
                      'Custom control over the environment used, approval workflow, and enhanced logging by environment. ' +
                      'Apply application settings from a secure vault to the Azure service simultaneously with deployment.',
      expanded: false
    },
    {
      title: 'Oracle Database Upgrade - 2022',
      description: 'Analyst for Oracle database upgrade efforts for a major U.S. bank.',
      imageUrl: 'jira.png',
      tags: ['Powerpoint', 'Jira', 'Slack'],
      additionalInfo: 'Work closely with a team of testers, developers, and business stakeholders to validate migration progress. ' + 
                      'Maintain a regular business package that details iterative statuses in regards to project efforts. ' +
                      'Validate results of smoke and regression test suites and determine root causes of defects.',
      expanded: false
    },
    {
      title: 'Cyber Maturity Audit - 2021',
      description: 'Assist a local non-profit determine their cyber maturity in collaboration with MITRE corp. and UTSA.',
      imageUrl: 'CIS.png',
      tags: ['CIS controls', 'Adobe Express'],
      additionalInfo: 'Comprehensive evaluation of the IT infrastructure, risks, and existing controls of an organization, adhering to the CIS Controls for Small-Medium Enterprises guidelines within client comfort level. ' +
                      'Worked closely with clients to understand their processes and gather essential information, ensuring a thorough and accurate assessment.' +
                      'Created customer friendly documentation and resources explaining findings in detail and included recommendations of action for organizational officials and MITRE corp., ' +
                      'to use in a follow-up project.',
      expanded: false
    },
    {
      title: 'Cyber Forensic Analysis - 2021',
      description: 'Examine a compromised UTSA affiliated honeypot system.',
      imageUrl: 'wireshark.png',
      tags: ['Wireshark', 'Sleuth Kit', 'Microsoft Word'],
      additionalInfo: 'Deep dive into the network and system logs to establish the entry point and activities of an intrusion. ' +
                      'Reconstructed timeline of events and actions taken by the intruders.' +
                      'Analysis of introduced malware to understand the functionality and related impacts. ' +
                      'Comprehensive incident report detailing the findings and all known details of the source.',
      expanded: false
    },
  ];

  toggleProject(project: any) {
    project.expanded = !project.expanded;
  }
}