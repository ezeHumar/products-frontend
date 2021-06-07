<template>
  <div class="productForm">
    <!-- <h1>Product Form</h1 -->
    <div class="content-section">
      <form>
        <fieldset>
          <legend class="border-bottom mb-4">New product</legend>
          <br>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" class="form-control" id="name" required v-model="name">
          </div>
          <br>
          <div class="from-group">
            <label for="description">Description</label>
            <textarea class="form-control" name="description" id="description" rows="20" required v-model="description"></textarea>
          </div>
          <div class="from-group">
            <label for="price">Price</label>
            <input type="number" name="price" step="0.01" class="form-control" id="price" required v-model="price">
          </div>
          <br>
          <div class="from-group">
            <label for="image">Image</label><br>
            <input type="file" id="image" name="productImage" accept="image/*">
          </div>
          
        </fieldset>
        <br>
        <div class="submit form-group">
          <button @click.prevent="submit" class="btn btn-outline-info">Add product</button>
        </div>
      </form>
      <br>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductForm",
  components: {},
  data(){
    return {
      name: "",
      description: "",
      price: ""
    }
  },
  methods: {
    submit() {
      let data = {
        name: this.name,
        description: this.description,
        price: this.price
      }
    
      axios.post('http://localhost:3000/products', data)
      .then( () => this.$router.push("/"))
      .catch(() => console.log("An error has ocurred"));
    }
  }
};
</script>

<style>
</style>