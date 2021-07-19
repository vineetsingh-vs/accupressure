import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Med } from '@med/med.model';

@Component({
  selector: 'med-search',
  templateUrl: './med-search.component.html',
  styleUrls: ['./med-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MedSearchComponent implements OnInit {
  public control = new FormControl();
  @Input()
  public meds: Med[];

  @Output()
  public medSelected = new EventEmitter<Med>();

  filteredMeds: Observable<string[]>;

  ngOnInit() {
    this.filteredMeds = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  public clean(): void {
    this.control.setValue('');
    this.medSelected.emit(null);
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return (this.meds || []).filter(disease => this._normalizeValue(disease.context).includes(filterValue))
      .map(disease => disease.context);
  }

  private _normalizeValue(value: string): string {
    return (value || '').toLowerCase().replace(/\s/g, '');
  }

  public optionSelected(value): void {
    if (!!value.isUserInput) {
      const med = (this.meds || []).find(disease => disease.context.includes(value.source.value));
      this.medSelected.emit(med);
    }
  }

}
