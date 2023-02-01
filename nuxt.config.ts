// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head:{
      title:"Nuxt Dojo",
      meta:[
        {name:"description",content:"Nuxtjs about him"}
      ]
    }
  },
  runtimeConfig:{
   
    urlKey:process.env.URL
  }
})
