import { Product } from '../classes/product.ts';

export class Repository {
    private _collection: Product[] = [];

    /**
     * Get all elements
     * @returns Entire collection
     */
    public get() {
        return this._collection;
    }

    /**
     * Finds and returns Product specified by Id
     * @param id Id of Product
     */
    public find(id: string) {
        return this._collection.find(element => element.id == id);
    }

    /**
     * Adds a new Product to the collection
     * @param Product Product object
     */
    public add(Product: Product) {
        Product.id;
        this._collection.push(Product);
    }
}