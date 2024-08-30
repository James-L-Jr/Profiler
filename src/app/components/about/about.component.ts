import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  resumeData = {
    name: 'James Logan',
    title: 'Software Engineer',
    contact: {
      email: 'jamestest@test.com',
      phone: '(123) 456-7890',
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
        responsibilities: [
          'Developed full-stack solutions for manufacturing applications, reaching several early deployment goals',
          'Configured more than 100 Grafana dashboard visualizations to allow observability of critical manufacturing systems ' + 
          'and reduce factory stoppages in more than 18 plants nationwide and abroad',
          'Developed and applied custom functions to PostgreSQL databases to customize database behavior',
          'Took a proactive role in testing, creating performance documentation and resolving more than 50 bugs'
        ]
      },
      {
        company: 'General Motors',
        position: 'DevOps Engineer',
        duration: 'Jun 2022 - Dec 2023',
        responsibilities: [
          'Acted as a company subject-matter expert for CI/CD workflows on the Azure platform',
          'Brought more than six production applications to meet 100% of company CI/CD adoption standards',
          'Developed deployment scripts to first-time deploy an organizational priority app to the Azure cloud',
          'Managed and maintained virtual server environments across Windows and Linux operating systems'
        ]
      },
      {
        company: 'HCL America Inc.',
        position: 'Developer',
        duration: 'Dec 2021 - Jun 2022',
        responsibilities: [
          'Developed and maintained company website',
          'Assisted in the creation of mobile applications using React Native',
          'Collaborated with design team to implement user-friendly interfaces'
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
    skills: ['JavaScript', 'TypeScript', 'Angular', 'React', 'Node.js', 'Python', 'Git', 'Docker']
  };

  getResumeDataKeys(): string {
    return Object.keys(this.resumeData).join(', ');
  }
}


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