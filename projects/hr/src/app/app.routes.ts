import { Routes } from '@angular/router';
import { HumanResources } from './pages/human-resources/human-resources';
import { MemberDetails } from './pages/member-details/member-details';

export const routes: Routes = [
  { path: '', component: HumanResources },
  { path: 'member/:id', component: MemberDetails }
];
