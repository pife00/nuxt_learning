<template>
    <div class="h-full p-4 bg-white shadow-md" >
        <div class="grid grid-cols-2 gap-2" >
            <div class="flex justify-center" >
                <img class="max-h-96" :src="item.image" alt="product_image">

            </div>
            <div>
                <h2 class="lg:text-2xl text-xl font-bold" > {{ item.title }} </h2>
                <h2 class="lg:text-lg font-medium" > Price ${{ item.price }} </h2>
                <h3 class="lg:text-md font-semibold mt-4" > Description </h3>
                <p class="lg-text-lg " > {{ item.description }}  </p>

                <button class=" max-w-xs w-full py-2 bg-blue-500 rounded-sm mt-6 text-white font-semibold" >Add Card</button>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue'
import { Products } from '~~/models/models';
export default defineComponent({
    props:{
        item:{
            type:Object as PropType<Products>,
            required:true,
        }
    },
    setup ({item}) {

        return {item,}
    }
})
</script>

<style scoped>

</style>