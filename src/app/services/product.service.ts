import { Injectable } from '@angular/core';
import { Product } from '../models/product/product';
import { ProductVariant } from '../models/product/product-variant';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  sampleProducts: any[] = [];

  constructor(
    
  ) {
    this.createDummyProducts();    
  }

  getById(id: string) {
    return this.sampleProducts.find((p: any) => p.id == id);
  }

  createDummyProducts(): Product[] {
    // TODO create dummy products and variants. 5 product and min 1 max 3 variants are enough.
    // If any suggestions or concerns, feel free to ask before implementation.
    const dummyProducts: Product[] = [];
    const defaultImgUrl = 'https://via.placeholder.com/400'; // Replace with your default image URL

    // Create 5 dummy products
    for (let i = 0; i < 5; i++) {
      const productId = `product-${i}`;
      const productName = `Product ${i}`;
      const gender = 'man'; // Change this as needed
      // const categoryIds: string[] = []; // Add category IDs if required

      // Create 1 to 3 variants for each product
      const numVariants = Math.floor(Math.random() * 3) + 1;
      const variants: ProductVariant[] = [];
      const product = new Product(productId, productName, gender, 't-shirt');
      product.defaultImgs = ['https://via.placeholder.com/400','https://via.placeholder.com/400', 'https://via.placeholder.com/400']
      product.defaultThumbnail = 'https://via.placeholder.com/150'
      for (let j = 0; j < numVariants; j++) {
        const variantColor = `Color ${j}`;
        const variantImgs: string[] = ['https://via.placeholder.com/400','https://via.placeholder.com/400','https://via.placeholder.com/400']; // Use the default image URL
        const variantThumbnail = defaultImgUrl; // Use the default image URL        
        const variant = new ProductVariant(productId, variantColor, variantImgs, variantThumbnail);
        variant.id = `${productId}-${j}`
        variant.size_xs = Math.floor(Math.random() * 10);
        variant.size_s = Math.floor(Math.random() * 10);
        variant.size_m = Math.floor(Math.random() * 10);
        variant.size_l = Math.floor(Math.random() * 10);
        variant.size_xl = Math.floor(Math.random() * 10);
        variants.push(variant);
        product.variants.push(variant);
        product.total = variant.size_xs + variant.size_s + variant.size_m + variant.size_l + variant.size_xl;
      }

      dummyProducts.push(product);
    }
    console.log('dummy products: ', dummyProducts);
    this.sampleProducts = dummyProducts;    
    return dummyProducts;
  }

  getProductsByCategoryAndGender(category?: string, gender?: string) {
    return this.sampleProducts.filter((p: any) => {
      return (p.gender === gender && p.category === category)
    })
  }

}
