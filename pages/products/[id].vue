<template>
    <div>
      <Head>
        <Title> {{ titlePage }} </Title>
        <Meta name="description" :content="description" />
      </Head>
      <div v-if="productData.title != ''" >
        <ProductsDetails :item="productData"  />
      </div>
      <div class=" bg-white max-w-md p-4 text-center mx-auto mt-8 " v-if="error">
       <div class="text-center">
         <h1 class="font-bold text-5xl leading-none tracking-tight" >Error </h1>
         <p class="font-semibold text-xl" >product no found</p>
         <button 
         v-on:click="navigateTo('/products')"
         class=" mt-2 py-2 w-full bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-600" >Go Back Products</button>
       </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  
  import { defineComponent } from "vue";
  import { Products } from "~~/models/models";
  export default defineComponent({
    setup() {
      definePageMeta({ layout: "products" });
      const titlePage = ref('')
      const description = ref('')
      const productData = ref<Products>({
        id: "",
        title: "",
        description: "",
        image: "",
        price: 0,
      });
      const { id } = useRoute().params;
      const url:string = `https://fakestoreapi.com/products/${id}`
      const error = ref(false)
      nextTick(async()=>{
          const {data:json} = await useFetch<Products>(url);
          
          if(!json.value){
            error.value = true
           // throw createError({statusCode:404,message:"product no found",fatal:true})
          }
          
          if(json.value){
            productData.value = json.value!;
            titlePage.value = productData.value.title
            description.value = productData.value.description
          }  
      })
      
     
    

      return {productData,id,error,titlePage,description};
    },
  });
  </script>
  
  <style scoped></style>