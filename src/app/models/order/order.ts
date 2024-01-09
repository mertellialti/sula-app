import { Address } from "../address/address";
import { Base } from "../base/base";

export class Order extends Base {
    ownerId!: string;
    productIds: string[] = []
    address: Address = new Address;
    status!: string
}