import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianDirective, AccordianLinkDirective, AccordianToggleDirective } from '@shared/directive';


@NgModule({
  declarations: [AccordianDirective, AccordianLinkDirective, AccordianToggleDirective],
  imports: [
    CommonModule
  ],
  exports: [
    AccordianDirective, AccordianLinkDirective, AccordianToggleDirective
  ]
})
export class SharedModule {
}
