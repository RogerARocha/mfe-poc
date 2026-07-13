import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'finance',
        loadChildren: () => import('../../../finance/src/app/app.routes').then(m => m.routes)
    },
    {
        path: 'hr',
        loadChildren: () => import('../../../hr/src/app/app.routes').then(m => m.routes)
    }
];
