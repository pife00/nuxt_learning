<template>
    <div class="bg-white max-w-md p-4 text-center mt-7 mx-auto " >
       
        <h1 class="text-7xl font-bold leading-none tracking-tighter " > {{ error.statusCode }} </h1>
        <h2 class="text-2xl"> {{ error.statusMessage }} </h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:['error'],
    setup () {
      
    }
})
</script>

<style scoped>

</style>