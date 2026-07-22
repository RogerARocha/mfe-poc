import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'finance',
    loadComponent: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'finance',
        exposedModule: './ComponentFinanceMain'
      }).then((m) => m.Finance)
  },
  {
    path: 'hr',
    children: [
      {
        path: '',
        loadComponent: () =>
          loadRemoteModule({
            type: 'manifest',
            remoteName: 'hr',
            exposedModule: './ComponentHRMain'
          }).then((m) => m.HumanResources)
      },
      // {
      //   path: 'member/:id',
      //   loadComponent: () =>
      //     loadRemoteModule({
      //       type: 'manifest',
      //       remoteName: 'hr',
      //       exposedModule: './MemberDetails'
      //     }).then((m) => m.MemberDetails)
      // }
    ]
  }
];
