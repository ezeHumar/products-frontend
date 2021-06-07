<template>
  <div class="productList">
    <div v-if="products">
      <h1 class="component-title">Product List</h1>
      <router-link class="btn btn-info btn-l mt-1 mb-1 ms-1 me-1" :to="{ name: 'ProductForm' }">
        Add product
      </router-link>
      <article v-for="product in products" :key="product.id" class="content-section">
        <div class="d-flex">
          <div style="min-width: 0;">
            <h2><router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="article-title">{{product.name}}</router-link></h2>
            <p class="article-content-shortened">Price: ${{product.price}}</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'ProductList',
  components: {
  },
  data(){
    return {
      products: [], //Array where the products are going to be stored
    }
  },
  mounted() {
    //The products gets retrieved
    axios.get(process.env.VUE_APP_URL + 'products')
    .then((res) => {
      //The retrieved products get stored in the products array
      this.products = res.data;
    })
    .catch(() => console.log("An error has ocurred"));
  }
}
</script>

<style>

</style>