import { Routes } from '@angular/router';
import { DocsComponent } from './components/docs/docs.component';
import { MainComponent } from './components/main/main.component';
import { ContributorsComponent } from './components/contributors/contributors.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'docs',
    component: DocsComponent
  },
  {
    path: 'contributors',
    component: ContributorsComponent
  },
];
