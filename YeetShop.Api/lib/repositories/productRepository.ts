import { Product } from '../classes/product.ts';

export class ProductRepository {
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
     * Adds a new element to the collection
     * @param Element Type object
     */
    public add(element: Product) {
        element.id;
        this._collection.push(element);
    }
}