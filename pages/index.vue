<template>
    <div>
        <h1>I am Home</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup() {
        definePageMeta({
            layout: "index"
        })
    }
})
</script>

<style scoped>

</style>