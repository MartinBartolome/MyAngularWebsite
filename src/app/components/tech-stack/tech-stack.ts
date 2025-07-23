import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-tech-stack',
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss'
})
export class TechStack {
  experiencedTechnologies = [
    'C#', '.NET Framework', 'Java', 'SpringBoot', 'Angular', 'JBoss', 
    'SolidWorks API', 'SQL', 'DevOps', 'Docker', 'GitHub', 'Jenkins'
  ];

  additionalKnowledge = [
    'Software Architecture', 'SOA', 'RESTful APIs', 'Enterprise Applications', 'CI/CD'
  ];

  currentlyLearning = [
    'Python', 'AWS', 'Node.js'
  ];
}
