import { Routes } from '@angular/router';
import { MedComponent } from '@med/med.component';


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
  }
];
