<template>
    <div>
        <div class="grid grid-cols-4 gap-5 p-4">
            <div v-for="(item, index) in productsData" :key="index">
                <div>
                    <ProductCard :product="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from 'vue'
import { Products } from '~~/models/models'
export default defineComponent({
    setup() {
        definePageMeta({
            layout: "products"
        })
        const productsData = ref<Products[]>([])

        nextTick(async () => {
            const { data: json } = await useFetch<Products[]>(
                'https://fakestoreapi.com/products'
            );
            productsData.value = json.value!;
        });


        return { productsData }
    }
})
</script>

<style scoped>

</style>