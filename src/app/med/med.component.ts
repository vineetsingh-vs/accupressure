import { Component, Input, OnInit } from '@angular/core';
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

  public isDisease: boolean;


  constructor(private httpService: CoreHttpService, private router: Router) { }

  ngOnInit(): void {
    const snapshotUrl =  this.router.url;
    this.router.events.subscribe((val: any) => {
      this.processUrl(val.url);
    });
    this.processUrl(snapshotUrl);
  }

  private filterUrl(url: string): string {
    const ctx = ['disease', 'point'].find((med) => !!med && !!url && url.includes(med));
    return {
      disease: '../../assets/model/disease.json',
      point: '../../assets/model/point.json'
    }[ctx];
  }

  private getMeridian(): Promise<any> {
    return this.httpService.getData('../../assets/model/meridian.json').toPromise()
      .then((meri) => this.meridian = meri);
  }

  private getDisease(url): void {
    this.httpService.getData(url).toPromise()
      .then((data) => {
        this.fullMedDatas = ((data || {}).diseases || [])
          .map((disease) => {
            const treatments = [...(disease.treatment || '').split(',').filter(treatment => !!treatment)];
            let images = treatments;
            let processedTreatments = [];
            images = images.map((image, index) => {
              const treatment = this.processTreatment(image);
              processedTreatments =  [
                ...processedTreatments,
                {
                  key: treatments[index],
                  value: (this.meridian.find((meri) => meri.point === treatment[0]) || {}).description
                }];
              return decodeURIComponent(`/assets/image/${treatment[0]} ${treatment[1]}.jpg`);
            });
            return ({
              context: disease.disease,
              treatments : processedTreatments,
              images
            });
          });
        this.filteredMedDatas = [];
      });
  }

  private getPoint(url): void {
    this.httpService.getData(url).toPromise()
      .then((data) => {
        this.fullMedDatas = ((data || {}).points || [])
          .map((point) => {
            const treatments = [...(point.disease || '').split(';').filter(treatment => !!treatment)];
            const images = [decodeURIComponent(`/assets/image/${point.point}.jpg`)];
            return ({
              context: point.point,
              treatments,
              images
            });
          });
        this.filteredMedDatas = [];
      });
  }

  private async processUrl(pUrl: string): Promise<any> {
    const url = this.filterUrl(pUrl);
    await this.getMeridian();
    if (!!url && url.includes('disease')) {
      this.getDisease(url);
      this.isDisease = true;
    } else if (!!url && url.includes('point')) {
      this.isDisease = false;
      this.getPoint(url);
    }
    return null;
  }

  public filterMed(med: Med) {
    this.filteredMedDatas = [];
    if (!!med) {
      this.selectedMed = med;
      this.filteredMedDatas = _.cloneDeep(this.fullMedDatas.filter(medi => medi.context === (this.selectedMed || {}).context));
    }
  }

  public processTreatment(treatment: string): string[] {
    return  treatment.replace('↓', '').replace('↑', '').trim().split(' ');
  }
}
