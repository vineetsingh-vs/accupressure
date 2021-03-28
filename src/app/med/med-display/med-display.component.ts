import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Med } from '@med/med.model';
import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';

const DEFAULT_DURATION = 300;
@Component({
  selector: 'med-display',
  templateUrl: './med-display.component.html',
  styleUrls: ['./med-display.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class MedDisplayComponent implements OnInit {

  @Input()
  public medData: Med;

  public collapsed = true;

  constructor() { }
  ngOnInit(): void {
  }

  public toggle(): void {
    this.collapsed = !this.collapsed;
  }

}
