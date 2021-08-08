import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {

  @Input()
  public images: string[];
  @Input()
  public treatments: {key: string, value: string}[] = [];

  @Output()
  public zoomImg = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void { }

  public zoom(): void {
    this.zoomImg.emit();
  }

}
