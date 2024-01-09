import { Base } from "../base/base";

export class Address extends Base {
    ownerId!: string;
    country!: string;
    state?: string
    city!: string; 
    address!: string;
    zipCode!: string;    
}