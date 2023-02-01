<template>
    <div>
        <div class="p-4 shadow-md bg-white" >
            <nav class="flex justify-between" >
                <h1 class="text-2xl text-black ">  <NuxtLink to="/" > Nuxt Dojo </NuxtLink> </h1>
                <ul class="flex gap-4">
                    <li> <NuxtLink to="/"> Home</NuxtLink> </li>
                    <li> <NuxtLink to="/products"> Products</NuxtLink> </li>
                    <li> <NuxtLink to="/about"> About</NuxtLink> </li>
                </ul>
            </nav>
        </div>
        <main>
            <slot />
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>