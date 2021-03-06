import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianDirective, AccordianLinkDirective, AccordianToggleDirective } from '@shared/directive';
import { TableComponent } from './component/table/table.component';
import { MaterialModule } from '@shared/material/material.module';
import { SpinnerComponent } from '@shared/component/spinner/spinner.component';
import { DialogComponent } from './component/dialog/dialog.component';


@NgModule({
  declarations: [AccordianDirective, AccordianLinkDirective, AccordianToggleDirective, TableComponent, SpinnerComponent, DialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AccordianDirective, AccordianLinkDirective, AccordianToggleDirective,
    MaterialModule, TableComponent, SpinnerComponent
  ]
})
export class SharedModule {
}
