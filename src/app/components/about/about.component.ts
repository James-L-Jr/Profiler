import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';
import { PrivacyPolicyDialogComponent } from '../dialogs/privacy-policy-dialog/privacy-policy-dialog';
import { TermsServiceDialogComponent } from '../dialogs/terms-service-dialog/terms-service-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private dialog: MatDialog) { }

  resumeData = {
    name: 'James Logan',
    title: 'Software Engineer',
    contact: {
      email: 'james.f.logan2@gmail.com',
      phone: 'Available upon request',
      location: 'Austin, TX'
    },
    summary: 'Experienced software engineer with a passion for creating secure and efficient applications. ' +
    'Expert in scalable solutions and managing high performance databases. ' +
    'Passionate about improving system performance, automating processes, and collaborating to drive successful deployments.',
    experience: [
      {
        company: 'General Motors',
        position: 'Software Engineer - Observability',
        duration: 'Dec 2023 - Present',
        scope: 'Developed and maintained secure web applications using Angular, Java, and Python, ' +
                'supporting operations in over 18 plants nationwide and abroad. Collaborated with cross-functional ' +
                'teams to design, integrate, and upgrade features for improved functionality across existing platforms.',
        responsibilities: [
          'Developed full-stack solutions for manufacturing applications, reaching several early deployment goals',
          'Configured over 100 Grafana dashboards to enhance observability of manufacturing systems, ' +
          'reducing factory stoppages and earning high praise from floor engineers for improved operational visibility',
          'Developed and applied custom functions to PostgreSQL databases to customize database behavior',
          'Took a proactive role in testing, creating performance documentation and resolving more than 50 bugs'
        ]
      },
      {
        company: 'General Motors',
        position: 'DevOps Engineer',
        duration: 'Jun 2022 - Dec 2023',
        scope: 'Acted as a company subject-matter expert for CI/CD workflows on the Azure platform. ' +
                'Maintained ownership responsibilities of virtual server environments across Windows and Linux operating systems.',
        responsibilities: [
          'Brought more than six production applications to meet 100% of company CI/CD adoption standards',
          'Developed deployment scripts to first-time deploy an organizational priority app to the Azure cloud',
          'Maintained active deployments for six production applications, ensuring continuous operability',
          'Performed patching, certification rotations, and remediation across Windows and Linux environments'
        ]
      },
      {
        company: 'HCL America Inc.',
        position: 'Developer',
        duration: 'Dec 2021 - Jun 2022',
        scope: 'Developed full-stack solutions in Java and JavaScript for a company-facing web application. ' + 
                'Acted as an analyst for Oracle database upgrade efforts for a major U.S. bank.',
        responsibilities: [
          'Developed full stack solutions in Java/Javascript for company-facing web applications',
          'Conducted unit and integration testing using JUnit, Postman, Insomnia, and other tools',
          'Validated testing for completeness as part of an organization-wide database upgrade initiative',
          'Compiled and presented deployment readiness reports to business stakeholders'
        ]
      }
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        focus: 'Cyber Security',
        institution: 'University of Texas at San Antonio',
        year: '2021',
        gpa: '3.7'
      }
    ],
    skills: ['Java', 'JavaScript', 'Python', 'Bash', 'PowerShell', 'Ansible', 'Angular', 'Kubernetes', 'Docker', 'Azure', 'CI/CD Tools', 'Git', 'Linux', 'Postgres', 'SQL', 'Grafana', 'Agile']
  };

  getResumeDataKeys(): string {
    return Object.keys(this.resumeData).join(', ');
  }

  openPrivacyPolicyDialog(event: Event): void {
    event.preventDefault();
    this.dialog.open(PrivacyPolicyDialogComponent, {
      width: '450px'
    });
  }

  openTermsServiceDialog(event: Event): void {
    event.preventDefault();
    this.dialog.open(TermsServiceDialogComponent, {
      width: '450px'
    });
  }
}

// WTF github pages doesn't support the HttpclientModule. Commenting for now...
// export class AboutComponent implements OnInit {
//   resumeData: any;

//   constructor(private resumeService: ResumeService) {}

//   ngOnInit() {
//     this.resumeService.getResumeData().subscribe(
//       data => {
//         this.resumeData = data;
//       },
//       error => {
//         console.error('Error fetching resume data:', error);
//         // Handle error (e.g., show error message to user)
//       }
//     );
//   }
// }