import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage),
    data: { showSidebar: false }
  },
  {
    path: 'homeAdmin',
    loadComponent: () => import('./pages/home-admin/home-admin.page').then(m => m.HomeAdminPage),
    data: { showSidebar: true }
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
