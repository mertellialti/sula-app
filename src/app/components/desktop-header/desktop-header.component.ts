import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuService } from 'src/app/services/menu/menu.service';
import { PlatformService } from 'src/app/services/platform/platform.service';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class DesktopHeaderComponent  implements OnInit {

  selectedCollection: any[] = [];
  cardVisible: boolean = false;
  currentCategory: string = '';
  cardTitle: string = '';

  constructor(
    private readonly router: Router,
    protected readonly platformSrv: PlatformService,
    protected readonly menuSrv: MenuService
  ) { }

  ngOnInit() { }

  navCart() {
    this.router.navigate(['cart']);
  }

  showCard(menuId: string) {
    if(menuId == 'manMenu'){
      this.selectedCollection = this.menuSrv.manMenu;
      this.cardVisible = true;
      this.currentCategory = menuId
      this.cardTitle = 'MAN'
     }
    else if(menuId == 'womanMenu'){
      this.selectedCollection = this.menuSrv.womanMenu;
      this.cardVisible = true;
      this.currentCategory = menuId
      this.cardTitle = 'WOMAN'
    }   
  }

  hideCard() {
    this.cardVisible = false;
  }


}
