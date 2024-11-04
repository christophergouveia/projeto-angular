import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Página Inicial',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contato',
    title: 'Contato',
    loadComponent: () => import('./pages/contato/contato.component').then(c => c.ContatoComponent)
  },
  {
    path: 'sobre',
    title: 'Sobre',
    loadComponent: () => import('./pages/sobre/sobre.component').then(c => c.SobreComponent)
  },
  {
    path: '**',
    title: 'Página não encontrada',
    loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)
  }
];
