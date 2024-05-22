import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  manMenu = [
    { name: 'All Sale', route: 'man/all-sale' },
    { name: 'T-Shirts', route: 'man/t-shirt' },
    { name: 'Sweatshirts', route: 'man/sweatshirt' },
    { name: 'Jackets', route: 'man/jacket' },
    { name: 'Caps', route: 'man/cap' },
  ]

  womanMenu = [
    { name: 'All Sale', route: 'woman/all-sale' },
    { name: 'T-Shirts', route: 'woman/t-shirt' },
    { name: 'Sweatshirts', route: 'woman/sweatshirt' },
    { name: 'Jackets', route: 'woman/jackets' },
    { name: 'Caps', route: 'woman/caps' },
  ]

  footerColumn1 = [
    { name: 'Cookie Settings' },
    { name: 'Privacy & Cookies Policy' },
    { name: 'About SULA' },
    { name: 'Online Shopping Policy' },
    { name: 'Return & Change' },
    { name: 'Order & Delivery' },
    { name: 'Career' }
  ]

  footerColumn2 = [
    { name: 'Instagram', icon: 'logo-instagram' },
    { name: 'TikTok', icon: 'logo-tiktok' },
    { name: 'X', icon: 'logo-twitter' },
    { name: 'SoundCloud', icon: 'logo-soundcloud' },
  ]

  private _uniqueMenuId: string = '';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateUniqueId();
    });
  }

  private updateUniqueId() {
    const currentUrl = this.router.url;
    this._uniqueMenuId = 'menu-' + currentUrl.replace(/\//g, '-').substring(1);
    this._uniqueMenuId = this._uniqueMenuId.replace(/[^a-zA-Z0-9-]/g, '');
    console.log('unique id is ', this._uniqueMenuId);
  }

  get uniqueMenuId() {
    return this._uniqueMenuId;
  }
}
