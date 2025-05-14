import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-gallery-hero',
  templateUrl: './gallery-hero.component.html',
  styleUrls: ['./gallery-hero.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GalleryHeroComponent  implements OnInit {
openQuickView() {
throw new Error('Method not implemented.');
}

   
    slidingImgs = ['../../assets/imgs/6.jpeg','../../assets/imgs/7.jpeg','../../assets/imgs/8.jpeg']
   
  
  constructor() { }

  ngOnInit() {}

}
