import { AfterContentChecked, Directive } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { AccordianLinkDirective } from '@shared/directive/accordianLink/accordian-link.directive';

@Directive({
  selector: '[accordian]'
})
export class AccordianDirective implements AfterContentChecked   {
  protected navlinks: Array<AccordianLinkDirective> = [];

  closeOtherLinks(selectedLink: AccordianLinkDirective): void {
    this.navlinks.forEach((link: AccordianLinkDirective) => {
      if (link !== selectedLink) {
        link.selected = false;
      }
    });
  }

  addLink(link: AccordianLinkDirective): void {
    this.navlinks.push(link);
  }

  removeGroup(link: AccordianLinkDirective): void {
    const index = this.navlinks.indexOf(link);
    if (index !== -1) {
      this.navlinks.splice(index, 1);
    }
  }

  checkOpenLinks() {
    this.navlinks.forEach((link: AccordianLinkDirective) => {
      if (link.group) {
        const routeUrl = this.router.url;
        const currentUrl = routeUrl.split('/');
        if (currentUrl.indexOf(link.group) > 0) {
          link.selected = true;
          this.closeOtherLinks(link);
        }
      }
    });
  }

  ngAfterContentChecked(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(e => this.checkOpenLinks());
  }

  constructor(private router: Router) {
    setTimeout(() => this.checkOpenLinks());
  }

}
