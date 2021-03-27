import { Routes } from '@angular/router';
import { MasterComponent } from '@master/master.component';


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
    ]
  }
];
