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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { MedPromotionComponent } from './med-promotion/med-promotion.component';
import { MedHelpComponent } from './med-help/med-help.component';
import { DiseaseComponent } from './med-display/disease/disease.component';
import { PointComponent } from './med-display/point/point.component';




@NgModule({
  declarations: [MedComponent, MedSearchComponent, MedDisplayComponent, RegisterComponent, MedPromotionComponent, MedHelpComponent, DiseaseComponent, PointComponent],
  imports: [
    RouterModule.forChild(MedRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    NgbModule
  ]
})
export class MedModule { }
