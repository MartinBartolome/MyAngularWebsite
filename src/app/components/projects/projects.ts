import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects = [
    {
      name: 'SafeLifeMonitor',
      description: 'A comprehensive life monitoring application designed to enhance safety and well-being through real-time monitoring and alerts.',
      url: 'https://github.com/MartinBartolome/SafeLifeMonitor',
      technologies: ['Angular', 'Spring Boot', 'Docker', 'CI/CD']
    },
    {
      name: 'JakartaEE-WebShop',
      description: 'A modern e-commerce web application built with Jakarta EE, showcasing enterprise-level development practices and patterns.',
      url: 'https://github.com/MartinBartolome/JakartaEE-WebShop',
      technologies: ['Jakarta EE', 'Java', 'RESTful APIs', 'Enterprise Architecture']
    }
  ];
}
