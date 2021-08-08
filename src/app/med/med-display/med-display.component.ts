import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Med, Meridian } from '@med/med.model';
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
export class MedDisplayComponent implements OnInit, OnChanges {

  @Input()
  public medData: Med;

  @Input()
  public meridian: Meridian [] = [];

  @Input()
  public isDisease: boolean;

  @Input()
  public context: string;

  @Input()
  public images: string[];
  @Input()
  public treatments: {key: string, value: string}[] = [];

  public collapsed = true;

  public zoomedImage: string;

  constructor() { }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  public toggle(): void {
    this.collapsed = !this.collapsed;
  }

  public zoom(image: string): void {
    this.zoomedImage = image;
  }

}
