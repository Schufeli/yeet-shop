<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="element in products" :key="element.id">
                <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="element.image">
                </a>
                <div class="mt-4">
                    <h2 class="text-gray-900 title-font text-lg font-medium">{{ element.name }}</h2>
                    <p class="mt-1" v-if="element.reducedPrice <= 0">CHF {{ element.price.toFixed(2) }}</p>
                    <div class="mt-1 flex" v-if="element.reducedPrice > 0">
                        <p class="mr-3">CHF {{ element.reducedPrice.toFixed(2) }}</p>
                        <p class="text-red-500 line-through decoration-2">CHF {{ element.price.toFixed(2) }}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
export default {
    data() {
        return {
            products: [
                { id: "f82efcee-5827-422a-945e-39c50b5047b0", name: "Eichof Lager 50cl", image: "https://dummyimage.com/420x260", price: 5.00, reducedPrice: 4.50 },
                { id: "138c5b47-da84-4942-8bee-b303403f74c3", name: "Moretti Lager 50cl", image: "https://dummyimage.com/420x260", price: 6.00, reducedPrice: 5.50 },
                { id: "ce8f4091-e6ce-4689-a15e-973de6cc8117", name: "Heineken Lager 50cl", image: "https://dummyimage.com/420x260", price: 1.00, reducedPrice: 0.00 },
                { id: "54ce074f-dfa7-4766-8804-4018343de61d", name: "Leue Gold 50cl", image: "https://dummyimage.com/420x260", price: 5.00, reducedPrice: 3.50 }

            ]
        }
    }
}
</script>