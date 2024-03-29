import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export interface User {
  id?: string;
  fullName: string;
  emailId: string;
  password: string;
  orderId: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input()
  public displayedColumns: any[];
  @Input()
  public dataSource: MatTableDataSource<User>;

  public columns: any[] = [];
  ngOnInit(): void {
    this.columns = this.displayedColumns.map(col => col.fieldName);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  constructor() {
  }

  ngAfterViewInit() {
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public copy(copy: any, text: any): void {
    copy.copied = true;
    const clip = document.createElement('textarea');
    clip.value = (text || '').trim();
    document.body.appendChild(clip);
    clip.select();
    clip.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(clip);
    setTimeout(() => copy.copied = false, 2000);
}

}
