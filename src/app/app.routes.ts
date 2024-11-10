import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { authRoutes } from './pages/auth/routes';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    ...authRoutes,
    {
        path: '',
        component: DashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];
