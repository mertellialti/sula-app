import { Base } from "../base/base";

export class ProductVariant extends Base {

    productId: string | undefined
    price: number | undefined;
    imgs: string[] | undefined
    thumbnail: string | undefined
    color: string | undefined
    size_xs!: number
    size_s!: number
    size_m!: number
    size_l!: number
    size_xl!: number

    constructor(
        productId: string,
        color: string,
        imgs: string[],
        thumbnail: string,
    ) {
        super();
        this.productId = productId;
        this.color = color;
        this.imgs = imgs;
        this.thumbnail = thumbnail;        
    }
}
