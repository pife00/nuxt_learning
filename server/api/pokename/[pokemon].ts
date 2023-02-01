interface pokemon{
    id:string,
    name:string,

}

export default defineEventHandler(async(event)=>{
    const {pokemon} = event.context.params
    const {urlKey} = useRuntimeConfig()

    const url = urlKey + pokemon
    const data: pokemon = await $fetch(url)

    return data
    
})