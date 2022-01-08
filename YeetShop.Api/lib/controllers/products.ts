import { ProductRepository } from '../repositories/productRepository.ts';
import { Product } from '../classes/product.ts';

const products: Product[] = [
    { id: "f82efcee-5827-422a-945e-39c50b5047b0", name: "Eichof Lager 50cl", image: "", price: 5.00, reducedPrice: 4.50 },
    { id: "138c5b47-da84-4942-8bee-b303403f74c3", name: "Moretti Lager 50cl", image: "", price: 6.00, reducedPrice: 5.50 },
    { id: "ce8f4091-e6ce-4689-a15e-973de6cc8117", name: "Heineken Lager 50cl", image: "", price: 1.00, reducedPrice: 0.00 },
]

const productRepository = new ProductRepository();

products.forEach((element: Product) => {
    productRepository.add(element);
});

export const getAllProducts = ({ response }: { response: any }) => {
    response.body = productRepository.get();
}

export const getProductById = ({ params, response }: { params: { id: string }; response: any }) => {
    response.body = productRepository.find(params.id);
}