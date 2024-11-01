import { Routes } from '@angular/router';
import { NotFoundPageComponent, HomeComponent, authRoutes } from './pages';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  ...authRoutes,
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
