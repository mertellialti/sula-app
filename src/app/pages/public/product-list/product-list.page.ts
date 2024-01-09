import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FooterService } from 'src/app/services/footer.service';
import { MenuService } from 'src/app/services/menu.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  manMenu: any[];
  womanMenu: any[];
  footerColumn1: any[];
  footerColumn2: any[];

  gender: string = '';
  type: string = '';
  products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private readonly router: Router,
    protected readonly menuSrv: MenuService,
    private readonly footerSrv: FooterService,
    private readonly productSrv: ProductService,
    private readonly menuCtrl: MenuController

  ) {
    this.manMenu = this.menuSrv.manMenu;
    this.womanMenu = this.menuSrv.womanMenu;
    this.footerColumn1 = this.footerSrv.footerColumn1
    this.footerColumn2 = this.footerSrv.footerColumn2

  }

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.gender = params['gender'];
      this.type = params['type'];
      this.getProducts();
    });
  }

  ionViewDidEnter() {
    this.menuCtrl.isEnabled().then((isEnabled) => {
      if (!isEnabled) {
        this.menuCtrl.enable(true);
      }
    });
  }

  getProducts() {
    this.products = this.productSrv.getProductsByCategoryAndGender(this.type, this.gender);
    console.log('Products: ', this.products);
    if (this.products.length == 0) {
      console.warn('no products',this.products);
    }
  }

  navigateSegment(route: string) {
    console.log('route: ', route);
    this.router.navigate(['collection', route]);
  }

  async navigate(gender: string, category: string) {
    await this.menuCtrl.close();
    // Close the menu
    await setTimeout(() => {
      console.log("Delayed for 1 second.");
    }, 1000);
    this.router.navigate(['collection', gender, category]);
  }

}
