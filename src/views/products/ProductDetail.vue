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
                        <button @click="deleteProduct()" class="btn btn-danger btn-sm mt-1 mb-1 ms-1 me-1">Delete</button>
                      </div>
                  </div>
                  <h2 class="article-title">{{ product.name }}</h2>
                  <h5>Description:</h5>
                  <p class="article-content ms-4 mb-2">{{ product.description }}</p>
                  <h5>Price:</h5>
                  <p class="article-content ms-4 mb-2">${{ product.price }}</p>
                  <h5>Image:</h5>
                  <img class="ms-4 mb-2" :src="apiurl + product.imageURL" width="250" alt="">
                  <br>
                  <button @click="deleteImage()" class="btn btn-danger btn-sm mt-1 mb-1 ms-1 me-1">Delete image</button>
              </div>
          </div>
      </article>
      
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  props: ['id'],
  name: 'ProductDetail',
  components: {
  },
  data(){
      return {
        product: null,
        apiurl: process.env.VUE_APP_URL
      }
  },
  mounted() {
    //The product gets retrieved
    axios.get(process.env.VUE_APP_URL + 'products/' + this.id)
    .then((res) => {
      this.product = res.data;
    })
    .catch(() => console.log("An error has ocurred"));
  },
  methods: {
    deleteProduct(){
      //Request for deleting the product
      axios.delete(process.env.VUE_APP_URL + 'products/' + this.id)
      .then(() => {
        //Redirects to the homepage
        this.$router.push("/");
      })
      .catch(() => console.log("An error has ocurred"));
    },
    deleteImage(){
      //Request for deleting the image
      axios.delete(process.env.VUE_APP_URL + 'products/' + this.id + '/image')
      .then(() => {
        //Redirects to the product detail
        this.$router.go({ name: 'ProductDetail', params: { id: this.id } });
      })
      .catch(() => console.log("An error has ocurred"));
    }
  }
}
</script>

<style>

</style>