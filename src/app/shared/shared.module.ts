import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianDirective, AccordianLinkDirective, AccordianToggleDirective } from '@shared/directive';
import { TableComponent } from './component/table/table.component';
import { MaterialModule } from '@shared/material/material.module';


@NgModule({
  declarations: [AccordianDirective, AccordianLinkDirective, AccordianToggleDirective, TableComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AccordianDirective, AccordianLinkDirective, AccordianToggleDirective,
    MaterialModule, TableComponent
  ]
})
export class SharedModule {
}
