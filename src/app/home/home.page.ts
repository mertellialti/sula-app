import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { FooterService } from '../services/footer.service';
import { IonicSlides } from '@ionic/angular';
import { SwiperOptions } from 'swiper/types';

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

  swiperModules = [IonicSlides];
  slidingImgs = ['../../assets/imgs/6.jpeg','../../assets/imgs/7.jpeg','../../assets/imgs/8.jpeg']
  
  swiperOptions: SwiperOptions = {
    slidesPerView: 1.2, // Display 1.2 images per view
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false, // Enable autoplay even when the user interacts with the Swiper
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Allow pagination bullets to be clickable
    },
  };
  

  constructor(
    private readonly menuSrv: MenuService,
    private readonly footerSrv: FooterService
  ) { 
    this.manMenu = this.menuSrv.manMenu;
    this.womanMenu = this.menuSrv.womanMenu;
    this.footerColumn1 = this.footerSrv.footerColumn1
    this.footerColumn2 = this.footerSrv.footerColumn2
    
  }

}
