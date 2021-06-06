<template>
  <div class="home">
    <ProductList/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from './products/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList
  }
}
</script>
