import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MenuComponent } from '../../../components/menu/menu.component';
import { MobileHeaderComponent } from '../../../components/mobile-header/mobile-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { DesktopHeaderComponent } from 'src/app/components/desktop-header/desktop-header.component';
import { GalleryHeroComponent } from 'src/app/components/gallery-hero/gallery-hero.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MenuComponent,
    MobileHeaderComponent,
    FooterComponent,
    DesktopHeaderComponent,
    GalleryHeroComponent
  ],
  declarations: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
