import { Routes } from '@angular/router';
import { authRoutes } from './pages/auth/routes';
import { authGuard } from './core/guards/auth.guard';
import { HomeComponent, NotFoundPageComponent } from './pages';

export const routes: Routes = [
    ...authRoutes,
    {
        path: '',
        component: HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: "**",
        component: NotFoundPageComponent
    }
];
