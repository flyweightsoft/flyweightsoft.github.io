import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'FlyweightSoft — Opensource Project',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'custom-explorer-sort',
    title: 'Custom Explorer Sort',
    loadComponent: () => import('./pages/custom-explorer-sort/custom-explorer-sort.component').then(c => c.CustomExplorerSortComponent)
  },
  {
    path: 'k8sdesk',
    title: 'k8sdesk',
    loadComponent: () => import('./pages/k8sdesk/k8sdesk.component').then(c => c.K8sdeskComponent)
  },
  {
    path: 'portfolio',
    title: 'Santhosh M — Portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio.component').then(c => c.PortfolioComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
