import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
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
export class DesktopHeaderComponent implements OnInit {
closeMenu() {
throw new Error('Method not implemented.');
}

  showAvatar: boolean = false;
  selectedCollection: any[] = [];
  cardVisible: boolean = false;
  currentCategory: string = '';
  cardTitle: string = '';
  activeMenu: string | null = null;
  manMenu = this.menuSrv.manMenu;
  womanMenu =  this.menuSrv.womanMenu;
  cartCount: number = 0;

  constructor(
    private readonly router: Router,
    protected readonly platformSrv: PlatformService,
    protected readonly menuSrv: MenuService
  ) { }

  ngOnInit() { 
    this.womanMenu = this.menuSrv.womanMenu;
    this.manMenu = this.menuSrv.manMenu;
    console.log('List: ', this.womanMenu, this.manMenu);
  }

  navCart() {
    this.router.navigate(['cart']);
  }

  showCard(menuId: string) {
    if (menuId == 'manMenu') {
      this.selectedCollection = this.menuSrv.manMenu;
      this.cardVisible = true;
      this.currentCategory = menuId
      this.cardTitle = 'MAN'
    }
    else if (menuId == 'womanMenu') {
      this.selectedCollection = this.menuSrv.womanMenu;
      this.cardVisible = true;
      this.currentCategory = menuId
      this.cardTitle = 'WOMAN'
    }
  }

  hideCard() {
    this.cardVisible = false;
  }

  toggleList(menu: string) {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }

  @HostListener('document:mouseleave')
  closeListOnMouseLeave() {
    this.activeMenu = null;
  }

}




