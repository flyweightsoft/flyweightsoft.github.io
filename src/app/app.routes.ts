import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'custom-explorer-sort',
    loadComponent: () => import('./pages/custom-explorer-sort/custom-explorer-sort.component').then(c => c.CustomExplorerSortComponent)
  },
  {
    path: 'k8sdesk',
    loadComponent: () => import('./pages/k8sdesk/k8sdesk.component').then(c => c.K8sdeskComponent)
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio.component').then(c => c.PortfolioComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
