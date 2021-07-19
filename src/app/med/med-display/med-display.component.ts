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

  public collapsed = true;

  public images: string[];
  public treatments: {key: string, value: string}[] = [];

  constructor() { }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!this.medData) {
      const images = [...this.medData.treatments];
      this.images = images.map((image, index) => {
        const treatment = this.processTreatment(image);
        this.treatments =  [...this.treatments,
          {key: this.medData.treatments[index],
            value: this.meridian.find((meri) => meri.point === `${treatment[0]}`).description }];
        return decodeURIComponent(`/assets/image/${treatment[0]} ${treatment[1]}.jpg`);
      });
    }
  }

  public toggle(): void {
    this.collapsed = !this.collapsed;
  }

  public processTreatment(treatment: string): string[] {
    return  treatment.replace('↓', '').replace('↑', '').trim().split(' ');
  }

}
