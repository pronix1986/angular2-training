import { Category } from './category.model';

interface IProduct {
    id: number;
    name: string;
    price: number;
}

export class Product implements IProduct {
    constructor(public id: number, public name: string,
        public description: string,
        public category: Category,
        public price: number) {}

}
