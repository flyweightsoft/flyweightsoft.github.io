import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'custom-explorer-sort',
    loadComponent: () => import('./pages/custom-explorer-sort/custom-explorer-sort.component').then(m => m.CustomExplorerSortComponent)
  },
  {
    path: 'k8sdesk',
    loadComponent: () => import('./pages/k8sdesk/k8sdesk.component').then(m => m.K8sdeskComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
