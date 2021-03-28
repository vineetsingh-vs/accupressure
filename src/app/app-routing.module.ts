import { Routes } from '@angular/router';
import {MasterComponent} from '@master/master.component';


export const RootRoutes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren:  () => import('./auth/auth.module').then(mod => mod.AuthModule)
      },
      {
        path: 'med',
        loadChildren:
          () => import('./med/med.module').then(m => m.MedModule)
      }
    ]
  }
];
