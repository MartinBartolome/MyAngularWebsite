import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { TechStack } from './components/tech-stack/tech-stack';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'tech-stack', component: TechStack },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '/about' }
];
