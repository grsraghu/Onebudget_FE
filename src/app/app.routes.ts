import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, // This wraps everything below
    children: [
      { path: '', redirectTo: 'tabs', pathMatch: 'full' },
      { 
        path: 'dashboard', 
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) 
       },
      { 
        path: 'tabs', 
        loadComponent: () => import('./pages/tabgroup/tabgroup.component').then(m => m.TabgroupComponent) ,
      
      }
    ]
  }
//   // Routes outside the layout (like Login)
//   { 
//         path: 'login', loadComponent: () => import('./pages/login.component').then(m => m.LoginComponent) 
// }
];