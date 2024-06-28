import { Routes } from '@angular/router';
import { AboutComponent } from './portfolio/about/about.component';
import { ProjectsComponent } from './portfolio/projects/projects.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { SkillsComponent } from './portfolio/skills/skills.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
];
