import { Base } from "./base/base";

export class Category extends Base {
    name: string | undefined
    constructor(name: string) {
        super();
        this.name = name
    }
}
