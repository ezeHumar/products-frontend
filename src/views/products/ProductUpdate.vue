<template>
  <div class="productUpdate">
      <h1>Product Update</h1>
      <div class="content-section">
      <form>
        <fieldset>
          <legend class="border-bottom mb-4">Update product</legend>
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
            <input type="file" id="image" name="productImage" accept="image/*" ref="file" v-on:change="handleFileUpload()">
          </div>
          
        </fieldset>
        <br>
        <div class="submit form-group">
          <button @click.prevent="submit" class="btn btn-outline-info">Update product</button>
        </div>
      </form>
      <br>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ['id'],
  name: 'ProductUpdate',
  components: {
  },
  data(){
    return {
      file: '',
      idRes: null,
      name: "",
      description: "",
      price: ""
    }
  },
  mounted() {
    axios.get('http://localhost:3000/products/' + this.id)
    .then((res) => {
      this.idRes = res.data.id;
      this.name = res.data.name;
      this.description = res.data.description;
      this.price = res.data.price;
    })
    .catch(() => console.log("An error has ocurred"));
  },
  methods: {
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    },
    submit() {
      if(this.file === ''){
        let data = {
          id: this.idRes,
          name: this.name,
          description: this.description,
          price: this.price
        }
      
        axios.put('http://localhost:3000/products', data)
        .then( () => this.$router.push({ name: 'ProductDetail', params: { id: this.idRes }}))
        .catch(() => console.log("An error has ocurred"));
        
      }else{
        console.log("aaa")
        let formData = new FormData();
        formData.append('productImage', this.file);
        formData.append('id', this.idRes);


        axios.put( 'http://localhost:3000/products/image',
          formData,
          {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
          .then(() => {
            let data = {
              id: this.idRes,
              name: this.name,
              description: this.description,
              price: this.price
            }
          
            axios.put('http://localhost:3000/products', data)
            .then( () => this.$router.push({ name: 'ProductDetail', params: { id: this.idRes }}))
            .catch(() => console.log("An error has ocurred"));
            }).catch(() => console.log("There was an error"));
      }
    }
  }
}
</script>

<style>

</style>