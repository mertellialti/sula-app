import { Component } from '@angular/core';
import { MenuService } from '../../../services/menu/menu.service';
import { FooterService } from '../../../services/footer/footer.service';
import { IonicSlides } from '@ionic/angular';
import { SwiperOptions } from 'swiper/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  manMenu: any[];

  womanMenu: any[];

  footerColumn1: any[];

  footerColumn2: any[];



  constructor(
    protected readonly menuSrv: MenuService,
    private readonly footerSrv: FooterService,
    private readonly router: Router,    
  ) { 
    this.manMenu = this.menuSrv.manMenu;
    this.womanMenu = this.menuSrv.womanMenu;
    this.footerColumn1 = this.footerSrv.footerColumn1
    this.footerColumn2 = this.footerSrv.footerColumn2
    
  }

  routeCart(){
    console.log('route cart')
  }

  navigateHome(){
    this.router.navigate([''])
  }
}
