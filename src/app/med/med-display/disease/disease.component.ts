import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.scss']
})
export class DiseaseComponent implements OnInit {

  @Input()
  public images: string[];
  @Input()
  public treatments: {key: string, value: string}[] = [];

  @Output()
  public zoomImg = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  public zoom(): void {
    this.zoomImg.emit();
  }

}
