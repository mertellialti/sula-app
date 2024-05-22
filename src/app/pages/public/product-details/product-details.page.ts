import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

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

  async ngOnInit() {
    this.cartVal = await this.cartSrv.getProductAmountInCart(this.currentVariant.id, this.selectedSize);
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

  async setSize() {
    console.log('Selected size: ', this.selectedSize, this.variantSizes);
    this.cartVal = await this.cartSrv.getProductAmountInCart(this.currentVariant.id, this.selectedSize);
  }

  async changeVariant(id: string) {
    console.log('Variant changed: ', this.currentVariant, id);
    if (this.currentVariant.id === id) return;
    this.currentVariant = this.product.variants.find((v: any) => {
      return v.id == id;
    });
    this.cartVal = await this.cartSrv.getProductAmountInCart(this.currentVariant.id, this.selectedSize);
    this.setSizes();
  }

  async updateCart(amount: number) {
    this.cartVal = await this.cartSrv.updateItem(this.currentVariant.id, amount, this.selectedSize);    
  }

  async getCartVal(productId: string, id: string){

  }
}
