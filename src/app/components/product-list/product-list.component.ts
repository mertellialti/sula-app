import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FooterService } from 'src/app/services/footer.service';
import { MenuService } from 'src/app/services/menu.service';
import { ProductComponent } from '../product/product.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink,
    ProductComponent
  ],
  standalone: true
})
export class ProductListComponent implements OnInit {

  manMenu: any[];
  womanMenu: any[];
  footerColumn1: any[];
  footerColumn2: any[];

  gender: string = '';
  type: string = '';
  products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private readonly menuSrv: MenuService,
    private readonly footerSrv: FooterService,
    private readonly productSrv: ProductService

    ) {     
      this.manMenu = this.menuSrv.manMenu;
      this.womanMenu = this.menuSrv.womanMenu;
      this.footerColumn1 = this.footerSrv.footerColumn1
      this.footerColumn2 = this.footerSrv.footerColumn2
     }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.gender = params['gender'];
      this.type = params['type'];
      // Fetch and display products based on gender and type
      this.getProducts();
    });
  }

  getProducts(){
    this.products = this.productSrv.productMenTShirt;    
  }

}
