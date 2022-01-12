import { OrderedProduct } from '../classes/orderedProduct.ts';
import { Order } from '../classes/order.ts';
import { OrderRepository } from '../repositories/orderRepository.ts';

const orders: Order[] = [];

const orderRepository = new OrderRepository();

orders.forEach((element: Order) => {
    orderRepository.add(element);
});

export const getAllOrders = ({ response }: { response: any }) => {
    response.body = orderRepository.get();
}

export const getOrderById = ({ params, response }: { params: { id: string }; response: any }) => {
    response.body = orderRepository.find(params.id);
}

export const createOrder = async ({ request, response }: { request: any; response: any }) => {
    const order: Order = await request.body().value;
    // TODO: Add auto generated Guids
    // order.id = _uuid.generate();
    orderRepository.add(order);
    response.status = 201;
    response.body = order;
}
