import { Routes } from '@angular/router';
import { MedComponent } from '@med/med.component';
import { RegisterComponent } from '@med/register/register.component';
import { MedHelpComponent } from '@med/med-help/med-help.component';


export const MedRoutes: Routes = [
  {
    path: '',
   redirectTo: 'point'
  },
  {
    path: 'point',
    component: MedComponent,
  },
  {
    path: 'disease',
    component: MedComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'help',
    component: MedHelpComponent,
  },
];
