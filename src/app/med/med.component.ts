import { Component, OnInit } from '@angular/core';
import { CoreHttpService } from '@core/services/http/http.service';
import {Router} from '@angular/router';
import { Med } from '@med/med.model';
import * as _ from 'lodash';

@Component({
  selector: 'med',
  templateUrl: './med.component.html',
  styleUrls: ['./med.component.scss']
})
export class MedComponent implements OnInit {

  public fullMedDatas: Med[];
  public filteredMedDatas: Med[];

  public selectedMed: Med;

  constructor(private httpService: CoreHttpService, private router: Router) { }

  ngOnInit(): void {
    const snapshotUrl =  this.router.url;
    this.router.events.subscribe((val: any) => {
      this.processUrl(val.url);
    });
    this.processUrl(snapshotUrl);
  }

  private filterUrl(url: string): string {
    const ctx = ['disease', 'point'].find((med) => url.includes(med));
    return {
      disease: '../../assets/model/disease.json',
      point: '../../assets/model/disease.json'
    }[ctx];
  }

  private getData(url): void {
    this.httpService.getData('../../assets/model/disease.json').toPromise()
      .then((data) => {
        this.fullMedDatas = ((data || {}).diseases || [])
          .map(disease => ({context: disease.disease, treatment: disease.Treatment, image: disease.image}));
        this.filteredMedDatas = _.cloneDeep(this.fullMedDatas);
      });
  }

  private processUrl(pUrl: string): void {
    const url = this.filterUrl(pUrl);
    if (url) {
      this.getData(url);
    }
  }

  public filterMed(med: Med) {
    this.selectedMed = med;
    this.filteredMedDatas = _.cloneDeep(this.fullMedDatas.filter(medi => medi.context === this.selectedMed.context));
  }
}
