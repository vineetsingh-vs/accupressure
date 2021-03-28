import { Routes } from '@angular/router';
import {MasterComponent} from '@master/master.component';
import { AdminGuard } from '@core/guard/admin.guard';


export const RootRoutes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: '',
        redirectTo: 'med',
        pathMatch: 'full'
      },
      {
        path: 'med',
        loadChildren:
          () => import('./med/med.module').then(m => m.MedModule)
      }
    ],
    canActivate: [AdminGuard]
  },
  {
    path: 'auth',
    loadChildren:  () => import('./auth/auth.module').then(mod => mod.AuthModule),
  },
];
