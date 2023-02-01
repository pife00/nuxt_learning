<template>
    <div>
        {{message.results}}
    </div>
</template>

<script lang="ts">

interface api {
    count: number,
    results: [description]
}

interface description {
    name: string,
    url: string,
}

export default defineComponent({
    setup() {
        definePageMeta({
            layout: "index"
        })

        const message = ref<api>({
            count: 0,
            results: [{name: "", url: ""}
            ]
        })

        nextTick(async () => {
            const { data: msg } = await useFetch('/api/pokename/ditto')
            console.log(msg)
           // message.value = msg.value!
            
        })

        return { message }
    }
})
</script>

<style scoped>

</style>