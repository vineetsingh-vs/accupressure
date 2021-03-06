import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  display: () => any | boolean;
  action?: () => any;
}

const clearCahce = () => {
  localStorage.setItem('user', null);
};

const MENUITEMS = [
  {state: 'med/point', type: 'link', name: 'Point', icon: 'my_location', display: () => true},
  {state: 'med/disease', type: 'link', name: 'Disease', icon: 'control_point', display: () => true},
  {
    state: 'med/register', type: 'link', name: 'Register', icon: 'perm_device_information', display: () => {
      if (JSON.parse(localStorage.getItem('user')) === 'vineetsingh0393@gmail.com') {
        return true;
      }
      return false;
    }
  },
  {
    state: 'auth', type: 'link', name: 'Logout', icon: 'power_settings_new', display: () => true, action: clearCahce
  }
];

@Injectable({
  providedIn: 'root'
})
export class MenuItems {
  public getMenuitem(): Menu[] {
    return MENUITEMS.filter(item => !!item.display());
  }
}
