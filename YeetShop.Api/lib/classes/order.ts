import { Product } from './product.ts';
export interface Order {
    id: string,
    name: string,
    surname: string,
    email: string,
    products: Product[],
    totalPrice: number
}