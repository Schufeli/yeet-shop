import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { Product } from '../lib/classes/product.ts';
import { Repository } from '../lib/repositories/repository.ts';

const repository = new Repository();

function setup() {
    // Create initial product and add it to repository
    const product: Product = {
        id: "1",
        name: "test",
        image: "https://google.com",
        price: 1,
        reducedPrice: 1
    };
    repository.add(product);
}
setup();

Deno.test("Get_FromRepository_ReturnsWholeCollectionOfProducts", () => {
    // Arrange
    const expected = 1;

    // Assert
    assertEquals(repository.get().length, expected)
})

Deno.test("Find_WithIdOfProduct_FindsAndReturnsSingleProductFromRepository", () => {
    // Arrange
    const expectedId = "1"

    // Assert
    assertEquals(repository.find(expectedId)!.id, expectedId)
});

Deno.test("Add_WithNewProductObject_InsertsNewProductIntoRepository", () => {
    // Arrange
    const expected = 2;
    const product: Product = {
        id: "2",
        name: "test",
        image: "https://google.com",
        price: 1,
        reducedPrice: 1
    };

    // Act
    repository.add(product);

    // Assert
    assertEquals(repository.get().length, expected);
});