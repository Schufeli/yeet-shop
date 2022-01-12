import { OrderedProduct } from './orderedProduct.ts';
export interface Order {
    id: string,
    name: string,
    surname: string,
    email: string,
    products: OrderedProduct[],
    totalPrice: number
}