import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  swiperModules = [IonicSlides];
  productId!: string;
  urlHistory!: string;
  product: any;
  currentVariant: any;
  cartVal: number = 0;
  sizes: string[] = ['xs', 's', 'm', 'l', 'xl'];
  variantSizes: any[] = [];
  selectedSize = 'S';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly location: Location,
    private readonly productSrv: ProductService,
    protected readonly cartSrv: CartService
  ) {
    this.route.params.subscribe((params) => {
      this.productId = params['productId'];
      this.product = productSrv.getById(this.productId);
      this.currentVariant = this.product.variants[0];
      this.setSizes();
    });
  }

  ngOnInit() {
  }

  back() {
    this.location.back()
  }

  setDefault() { }

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route }); // Assuming you have an activated route
  }

  setSizes() {
    this.variantSizes = this.sizes.map((size: string) => {
      return { size: size.toUpperCase(), value: this.currentVariant['size_' + size] }
    });
    console.log('sizes: ', this.variantSizes);
  }

  setSize() {
    console.log('Selected size: ', this.selectedSize, this.variantSizes);
  }

  changeVariant(id: string) {
    console.log('Variant changed: ',this.currentVariant,id);
    if(this.currentVariant.id === id) return;
    this.currentVariant = this.product.variants.find((v: any) => {
      return v.id == id;
    });
  }
}
