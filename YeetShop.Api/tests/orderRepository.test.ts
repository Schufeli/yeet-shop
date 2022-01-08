import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { Order } from '../lib/classes/order.ts';
import { OrderRepository } from '../lib/repositories/orderRepository.ts';

const repository = new OrderRepository();

function setup() {
    // Create initial product and add it to repository
    const order: Order = {
        id: '1',
        name: 'Hans',
        surname: 'Mustermann',
        email: 'hans@mustermann.ch',
        products: [
            {
                id: "1",
                name: "test",
                image: "https://google.com",
                price: 1,
                reducedPrice: 1
            }
        ],
        totalPrice: 1
    };
    repository.add(order);
}
setup();

Deno.test("Get_FromRepository_ReturnsWholeCollectionOfOrders", () => {
    // Arrange
    const expected = 1;

    // Assert
    assertEquals(repository.get().length, expected)
})

Deno.test("Find_WithIdOfOrder_FindsAndReturnsSingleOrderFromRepository", () => {
    // Arrange
    const expectedId = "1"

    // Assert
    assertEquals(repository.find(expectedId)!.id, expectedId)
});

Deno.test("Add_WithNewOrderObject_InsertsNewOrderIntoRepository", () => {
    // Arrange
    const expected = 2;
    const order: Order = {
        id: '2',
        name: 'Hans',
        surname: 'Mustermann',
        email: 'hans@mustermann.ch',
        products: [
            {
                id: "1",
                name: "test",
                image: "https://google.com",
                price: 1,
                reducedPrice: 1
            }
        ],
        totalPrice: 1
    };

    // Act
    repository.add(order);

    // Assert
    assertEquals(repository.get().length, expected);
});