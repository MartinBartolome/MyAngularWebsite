import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LocationIcon, EmailIcon, PhoneIcon, LinkedInIcon, GitHubIcon } from '../../shared/icons/custom-icons';

@Component({
  selector: 'app-contact',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatListModule, LocationIcon, EmailIcon, PhoneIcon, LinkedInIcon, GitHubIcon],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contactInfo = {
    email: 'martin-bartolome@outlook.com',
    phone: '+41 79 620 50 21',
    location: 'Arlesheim, Baselland, Switzerland',
    linkedin: 'https://www.linkedin.com/in/martin-bartolome/',
    github: 'https://github.com/MartinBartolome'
  };
}
