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
export default {
  name: 'ProductList',
  components: {
  },
  data(){
    return {
      products: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/products')
    .then( res => res.json())
    .then( data => this.products = data)
    .catch(() => console.log("An error has ocurred"))
  }
}
</script>

<style>

</style>