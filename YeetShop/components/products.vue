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
                    <p class="mt-1" v-if="element.reducedPrice <= 0">{{ element.price | price }}</p>
                    <div class="mt-1 flex" v-if="element.reducedPrice > 0">
                        <p class="mr-3">{{ element.reducedPrice | price }}</p>
                        <p class="text-red-500 line-through decoration-2">{{ element.price | price }}</p>
                    </div>
                    <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </button>
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
    },
    filters: {
        price: number => `CHF ${number.toFixed(2)}`
    }
}
</script>