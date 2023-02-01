
interface ListPokemon{
    results:[]
}
export default defineEventHandler(async(event)=>{
    
    const data:ListPokemon[] = await $fetch('https://pokeapi.co/api/v2/pokemon')

    return data
    
})