import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  currentPlatform: any;

  constructor(
    private readonly platform: Platform
  ) { 
    if (this.platform.is('desktop')) {
      this.currentPlatform = 'desktop';
    } else {
      this.currentPlatform = 'mobile';
    }
    console.log('platform is',this.currentPlatform);
    
  }
}
