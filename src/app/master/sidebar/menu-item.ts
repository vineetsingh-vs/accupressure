import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  // { state: 'med', name: 'Dashboard', type: 'link', icon: 'home' },
  { state: 'med/point', type: 'link', name: 'Point', icon: 'my_location' },
  { state: 'med/disease', type: 'link', name: 'Disease', icon: 'control_point' },
  { state: 'logout', type: 'link', name: 'Logout', icon: 'power_settings_new' }
];

@Injectable({
  providedIn: 'root'
})
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
