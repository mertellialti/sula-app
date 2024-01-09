import { Base } from "../base/base"
import { ProductVariant } from "./product-variant";

export class Product extends Base {    
    name: string;    
    gender: string;    
    // categoryIds: string[] = [];
    category: string
    variants: ProductVariant[] = [];    
    total: number = 0;
    defaultImgs: string[] | undefined
    defaultThumbnail: string | undefined

    constructor(id: string, name: string, gender: string, category: string) {
        super();
        this.id = id;
        this.name = name;    
        this.gender = gender;        
        this.category = category
        // this.categoryIds = categoryIds;        
    }

}
