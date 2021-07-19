import { Component, OnInit } from '@angular/core';
import { CoreHttpService } from '@core/services/http/http.service';
import {Router} from '@angular/router';
import { Med, Meridian } from '@med/med.model';
import * as _ from 'lodash';

@Component({
  selector: 'med',
  templateUrl: './med.component.html',
  styleUrls: ['./med.component.scss']
})
export class MedComponent implements OnInit {

  public fullMedDatas: Med[];
  public filteredMedDatas: Med[];
  public meridian: Meridian[];

  public selectedMed: Med;


  constructor(private httpService: CoreHttpService, private router: Router) { }

  ngOnInit(): void {
    const snapshotUrl =  this.router.url;
    this.router.events.subscribe((val: any) => {
      this.processUrl(val.url);
    });
    this.processUrl(snapshotUrl);
    this.getMeridian();
  }

  private filterUrl(url: string): string {
    const ctx = ['disease', 'point'].find((med) => !!med && !!url && url.includes(med));
    return {
      disease: '../../assets/model/disease.json',
      point: '../../assets/model/disease.json'
    }[ctx];
  }

  private getMeridian(): void {
    this.httpService.getData('../../assets/model/meridian.json').toPromise()
      .then((meri) => this.meridian = meri);
  }

  private getData(url): void {
    this.httpService.getData('../../assets/model/disease.json').toPromise()
      .then((data) => {
        this.fullMedDatas = ((data || {}).diseases || [])
          .map(disease => {
            return ({
              context: disease.disease,
              treatments: (disease.treatment || '').split(',').filter(treatment => !!treatment)});
          });
        this.filteredMedDatas = [];
      });
  }

  private processUrl(pUrl: string): void {
    const url = this.filterUrl(pUrl);
    if (url) {
      this.getData(url);
    }
  }

  public filterMed(med: Med) {
    this.filteredMedDatas = [];
    if (!!med) {
      this.selectedMed = med;
      this.filteredMedDatas = _.cloneDeep(this.fullMedDatas.filter(medi => medi.context === (this.selectedMed || {}).context));
    }
  }
}
