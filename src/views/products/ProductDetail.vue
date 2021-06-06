<template>
  <div class="productDetail">
    <div v-if="product">
      <h1 class="component-title">Product Detail</h1>
      <article class="content-section">
          <div class="d-flex">
              <div style="min-width: 0;">
                  <div class="article-metadata">
                      <div>
                        <router-link class="btn btn-secondary btn-sm mt-1 mb-1 ms-1 me-1" :to="{ name: 'ProductUpdate', params: { id: product.id } }">
                          Update
                        </router-link>
                        <button class="btn btn-danger btn-sm mt-1 mb-1 ms-1 me-1">Delete</button>
                      </div>
                  </div>
                  <h2 class="article-title">{{ product.name }}</h2>
                  <h5>Description:</h5>
                  <p class="article-content ms-4 mb-2">{{ product.description }}</p>
                  <h5>Price:</h5>
                  <p class="article-content ms-4 mb-2">${{ product.price }}</p>
                  <h5>Image:</h5>
                  <img class="ms-4 mb-2" :src="'http://localhost:3000/' + product.imageURL" alt="">
              </div>
          </div>
      </article>
      
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: 'ProductDetail',
  components: {
  },
  data(){
      return {
        product: null
      }
  },
  mounted() {
    fetch('http://localhost:3000/products/' + this.id)
    .then( res => res.json())
    .then( data => this.product = data)
    .catch(() => console.log("An error has ocurred"))
  }
}
</script>

<style>

</style>