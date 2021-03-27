import { NgModule } from '@angular/core';
import { MedComponent } from './med.component';
import { RouterModule } from '@angular/router';
import { MedRoutes } from '@med/med-routing.module';
import { MedSearchComponent } from './med-search/med-search.component';
import { MaterialModule } from '@shared/material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedDisplayComponent } from './med-display/med-display.component';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';




@NgModule({
  declarations: [MedComponent, MedSearchComponent, MedDisplayComponent],
  imports: [
    RouterModule.forChild(MedRoutes),
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule
  ]
})
export class MedModule { }
