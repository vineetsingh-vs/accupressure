import { Directive, HostListener, Inject } from '@angular/core';
import { AccordianLinkDirective } from '@shared/directive/accordianLink/accordian-link.directive';

@Directive({
  selector: '[accordianToggle]'
})
export class AccordianToggleDirective  {
  protected navlink: AccordianLinkDirective;

  constructor(@Inject(AccordianLinkDirective) navlink: AccordianLinkDirective) {
    this.navlink = navlink;
  }

  @HostListener('click', ['$event'])
  onClick(e: any) {
    this.navlink.toggle();
  }
}
