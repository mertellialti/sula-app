import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

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
  constructor() { }
}
