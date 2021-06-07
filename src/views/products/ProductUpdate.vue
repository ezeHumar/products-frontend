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
      file: '', //Variable for the image
      idRes: null, //ID of the product
      name: "", //Name of the product
      description: "", //Description of the product
      price: "" //Price of the product
    }
  },
  mounted() {
    //The product info gets retrieved
    axios.get(process.env.VUE_APP_URL + 'products/' + this.id)
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
      //When a fine gets selected by the user, it gets saved in the file variable
      this.file = this.$refs.file.files[0];
    },
    submit() {
      //If the user selected an image the image first gets uploaded and then the product itself gets uploaded
      //If the user didn't select an image the product gets uploaded without an image
      if(this.file === ''){//If there is no picture uploaded

        //The data object is built
        let data = {
          id: this.idRes,
          name: this.name,
          description: this.description,
          price: this.price
        }
        
        //Request for uploading the product
        axios.put(process.env.VUE_APP_URL + 'products', data)
        .then( () => this.$router.push({ name: 'ProductDetail', params: { id: this.idRes }}))//The user gets redirected to the product detail
        .catch(() => console.log("An error has ocurred"));
        
      }else{//If there is a picture uploaded

        //A formdata is made for sending the image
        let formData = new FormData();
        formData.append('productImage', this.file);
        formData.append('id', this.idRes);

        //Request for uploading only the image
        axios.put( process.env.VUE_APP_URL + 'products/' + 'image',
          formData,
          {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
          .then(() => {

            //The image is updated and then the product is uploaded
            let data = {
              id: this.idRes,
              name: this.name,
              description: this.description,
              price: this.price
            }
            //Reques for uploading the product
            axios.put(process.env.VUE_APP_URL + 'products', data)
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