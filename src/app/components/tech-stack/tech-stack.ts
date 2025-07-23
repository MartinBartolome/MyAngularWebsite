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
    'C#', 'Java', 'Spring Boot', 'Angular', 'Docker', 
    'DevOps', 'SQL', 'GitHub', 'Jenkins'
  ];

  additionalKnowledge = [
    'Software Architecture', 'SOA', 'RESTful APIs'
  ];

  currentlyLearning = [
    'Python', 'AWS', 'Node.js'
  ];
}
