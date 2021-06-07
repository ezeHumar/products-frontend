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
            <input type="file" id="image" name="productImage" accept="image/*" ref="file" v-on:change="handleFileUpload()">
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
      file: '', //Variable for the image
      name: "", //Name of the product
      description: "", //Description of the product
      price: "" //Price of the product
    }
  },
  methods: {
    handleFileUpload(){
      //When a fine gets selected by the user, it gets saved in the file variable
      this.file = this.$refs.file.files[0];
    },
    submit() {

      //If the user selected an image the image first gets uploaded and then the product itself gets uploaded
      //If the user didn't select an image the product gets uploaded without an image
      if(this.file === ''){//If there is no picture uploaded

        //The data object is built
        let data = {
          name: this.name,
          description: this.description,
          price: this.price,
          imageURL: ''
        }

        //Request for uploading the product
        axios.post('http://localhost:3000/products', data)
        .then( (data) => {
          //The user gets redirected to the product detail
          this.$router.push({ name: 'ProductDetail', params: { id: data.data.id }});
          console.log(data);
        })
        .catch(() => console.log("An error has ocurred"));
        
      }else{//If there is a picture uploaded

        //A formdata is made for sending the image
        let formData = new FormData();
        formData.append('productImage', this.file);

        //Request for uploading only the image
        axios.post( 'http://localhost:3000/products/image',
          formData,
          {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
          .then((imageURL) => {

            //The image url is recived and then the product is uploaded
            let data = {
              name: this.name,
              description: this.description,
              price: this.price,
              imageURL: imageURL.data
            }

            //Reques for uploading the product
            axios.post('http://localhost:3000/products', data)
            .then( (data) => {
              this.$router.push({ name: 'ProductDetail', params: { id: data.data.id }});
            })
            .catch(() => console.log("An error has ocurred"));
            }).catch(() => console.log("There was an error"));
      }
      
    }
  }
};
</script>

<style>
</style>