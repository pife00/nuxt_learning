<template>
    <div class="text-center p-4 bg-white shadow-md h-full " >
        <NuxtLink class="flex justify-center" :to="`/products/${product.id}`">
            <img class="rounded-lg max-h-32 max-w-sm " :src="product.image" alt="product_image">
        </NuxtLink>
        <h3 class="text-lg font-medium mb-2 " maxlength="100"> {{ shortTitle(product.title) }} </h3>
        <button class="btn-primary block w-full" >
            <NuxtLink class="flex justify-center" :to="`/products/${product.id}`">
                View Details
            </NuxtLink>
            </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PropType } from 'vue';

import { Products } from '~~/models/models';



export default defineComponent({
    props:{
    product:{
        type: Object as PropType<Products>,
        required:true,
        default:{}
    }
},
    setup ({product}) {
        
        function shortTitle(title:string){
            if(title.length > 25) return title.slice(0,25) + "..."
            if(title.length < 25) return title
        }

        return {product,shortTitle}
    }
})
</script>

<style scoped>

</style>