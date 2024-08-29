import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
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
        company: 'Tech Solutions Inc.',
        position: 'Software Engineer - Observability',
        duration: 'Jun 2022 - Present',
        responsibilities: [
          'Lead a team of 5 developers in creating web applications',
          'Implemented CI/CD pipelines, improving deployment efficiency by 40%',
          'Mentored junior developers and conducted code reviews'
        ]
      },
      {
        company: 'StartUp Innovations',
        position: 'Junior Developer',
        duration: 'Jun 2018 - Dec 2019',
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
        institution: 'University of Technology',
        year: '2018'
      }
    ],
    skills: ['JavaScript', 'TypeScript', 'Angular', 'React', 'Node.js', 'Python', 'Git', 'Docker']
  };
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