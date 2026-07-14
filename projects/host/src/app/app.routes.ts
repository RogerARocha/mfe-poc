import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'finance',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'finance',
        exposedModule: './routes'
      }).then((m) => m.routes)
  },
  {
    path: 'hr',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'hr',
        exposedModule: './routes'
      }).then((m) => m.routes)
  }
];
