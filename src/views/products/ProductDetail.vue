<template>
  <div class="productDetail">
      <h1>Product Detail</h1>
      <p>Prametro: {{ id }}</p>
      <p> Hola: {{ hola }}</p>
      <router-link :to="{ name: 'ProductDetail', params: { id: 1 } }">

      </router-link>
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
        //   id: this.$route.params.id,
        
          hola: 123
      }
  }
}
</script>

<style>

</style>