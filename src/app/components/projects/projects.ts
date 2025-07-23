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
      technologies: ['Java', 'Spring Boot', 'Angular', 'Docker']
    },
    {
      name: 'JakartaEE-WebShop',
      description: 'A modern e-commerce web application built with Jakarta EE, showcasing enterprise-level development practices and patterns.',
      url: 'https://github.com/MartinBartolome/JakartaEE-WebShop',
      technologies: ['Jakarta EE', 'Java', 'HTML', 'Enterprise Architecture']
    },
    {
      name: 'MultiplayerTowerDefense',
      description: 'A real-time multiplayer tower defense game demonstrating client-server architecture and game development principles.',
      url: 'https://github.com/MartinBartolome/MultiplayerTowerDefense',
      technologies: ['JavaScript', 'Node.js', 'WebSocket', 'Game Development']
    },
    {
      name: 'Dienstplanverwaltung',
      description: 'A service schedule management system for efficient personnel planning and resource allocation.',
      url: 'https://github.com/MartinBartolome/Dienstplanverwaltung',
      technologies: ['Java', 'Enterprise Application', 'Planning System']
    },
    {
      name: 'MazeRunner',
      description: 'A 3D maze exploration game showcasing graphics programming and shader development.',
      url: 'https://github.com/MartinBartolome/MazeRunner',
      technologies: ['ShaderLab', 'Unity', '3D Graphics', 'Game Development']
    },
    {
      name: 'Android-Beispiele',
      description: 'Collection of Android development examples and best practices for mobile application development.',
      url: 'https://github.com/MartinBartolome/Android-Beispiele',
      technologies: ['Java', 'Android', 'Mobile Development']
    }
  ];
}
